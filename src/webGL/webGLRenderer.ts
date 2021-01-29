/* eslint-disable @typescript-eslint/no-non-null-assertion */
import fragShaderSource from "./shader.frag"
import vertShaderSource from "./shader.vert"

// We're going to use `then` to track the delta between rendered frames
let then = 0
// And we're going to use `strikes` to track how many times the
// frame delta exceeds the tolerance.
let strikes = -1
const tolerance = 100

// Tracking the URL changes to reset performance checkers on page changes
let url: string
let initialUrl: string

function init(canvas: HTMLCanvasElement) {
  initialUrl = url = window.location.toString()
  // These values will be mutated according to whether or not we can use
  // OffscreenCanvas
  let glCanvas: HTMLCanvasElement | OffscreenCanvas
  let ctx: CanvasRenderingContext2D | ImageBitmapRenderingContext

  canvas.width = canvas.clientWidth * 0.75
  canvas.height = canvas.clientHeight * 0.75

  // If we can use an OffscreenCanvas, we should. It's up to the User Agent
  // whether OffscreenCanvas work happens on the main thread. Ideally I'd use
  // a Web Worker for this, but I'm too dumb
  let offscreen = false
  if ("OffscreenCanvas" in window) {
    glCanvas = new OffscreenCanvas(canvas.width, canvas.height)
    offscreen = true
    ctx = canvas.getContext("bitmaprenderer")!
  } else {
    glCanvas = document.createElement("canvas")
    glCanvas.width = canvas.width
    glCanvas.height = canvas.height
    ctx = canvas.getContext("2d")!
  }

  const gl = glCanvas.getContext("webgl")!
  gl.viewport(0, 0, canvas.width, canvas.height)

  // Create the buffer
  // This buffer just renders two triangles as a rectangle the size of the
  // canvas
  const buffer = gl.createBuffer()!
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      -1.0,
      -1.0,
      1.0,
      -1.0,
      -1.0,
      1.0,
      -1.0,
      1.0,
      1.0,
      -1.0,
      1.0,
      1.0,
    ]),
    gl.STATIC_DRAW
  )

  // Create the shaders
  // This vertex shader is dead simple and just returns its input attribute
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)!
  gl.shaderSource(vertexShader, vertShaderSource)
  gl.compileShader(vertexShader)

  // The fragment shader does a bunch of cool stuff, mostly rotating points,
  // coloring them, and constraining the output colors
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!
  gl.shaderSource(fragmentShader, fragShaderSource)
  gl.compileShader(fragmentShader)

  // Connect the shaders and program to the renderer
  const program = gl.createProgram()!
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  gl.useProgram(program)

  // Delete components early to improve performance
  gl.deleteShader(vertexShader)
  gl.deleteShader(fragmentShader)
  gl.deleteProgram(program)

  // Connect to the position attribute for the vertex shader
  const positionLocation = gl.getAttribLocation(program, "a_position")
  gl.enableVertexAttribArray(positionLocation)

  // Set the resolution uniform and create a connection to the time uniform
  const resolution = [canvas.clientWidth, canvas.clientHeight]
  const resolutionPosition = gl.getUniformLocation(program, "resolution")
  const timePosition = gl.getUniformLocation(program, "time")
  const shouldInvertPosition = gl.getUniformLocation(program, "shouldInvert")
  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  let shouldInvert = !mql.matches

  mql.addListener((e) => {
    if (e.matches) {
      shouldInvert = false
    } else {
      shouldInvert = true
    }
  })

  // Reset the spike counter when focusing away since requestAnimationFrame
  // doesn't tick on inactive windows anyway
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      strikes = -1
    }
  })

  // The main render loop
  // First, we'll start a random seed to create a different starting scene on
  // each canvas mount
  const seed = Math.round(Math.random() * 20000)

  let running = true

  function render(now: number) {
    // Early in the loop, we'll do some performance monitoring.
    const diff = now - then
    then = now

    // If the loop is lagging and the document is in focus, keep lags below
    // three strikes
    if (diff > tolerance && document.hasFocus()) {
      url = window.location.toString()

      // Only if the page URL has changed do we really need to worry about
      // FPS spikes
      if (url === initialUrl) {
        strikes++
      } else {
        // Otherwise, reset the spike counter ready for the next mount
        strikes = -1
      }
    }

    // Three strikes and we're out
    if (strikes >= 3) {
      cancelLoop()
      return
    }

    // Clear GLSL canvas
    gl.clear(gl.COLOR_BUFFER_BIT)

    // Update GLSL attributes and uniforms
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
    gl.uniform2fv(resolutionPosition, resolution)
    gl.uniform1f(timePosition, now / 2000.0 + seed)
    gl.uniform1i(shouldInvertPosition, Number(shouldInvert))

    // Draw arrays
    gl.drawArrays(gl.TRIANGLES, 0, 6)

    // Output image to canvas
    if (offscreen) {
      const frame = (glCanvas as OffscreenCanvas).transferToImageBitmap()
      const castContext = ctx as ImageBitmapRenderingContext
      castContext.transferFromImageBitmap(frame)
    } else {
      const castContext = ctx as CanvasRenderingContext2D
      castContext.drawImage(gl.canvas, 0, 0)
    }

    // Call the render loop again before the next pain cycle
    if (running) {
      window.requestAnimationFrame(render)
    }
  }

  function cancelLoop() {
    running = false
  }

  // Kick off our render loop
  render(0)

  return { canceller: cancelLoop }
}

export default function renderWebGLLayer(
  canvas: HTMLCanvasElement
): { canceller: () => void } {
  return init(canvas)
}
