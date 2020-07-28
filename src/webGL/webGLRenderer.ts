/* eslint-disable @typescript-eslint/no-non-null-assertion */
import fragShaderSource from "./shader.frag"
import vertShaderSource from "./shader.vert"

function init(canvas: HTMLCanvasElement) {
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
  const resolutionPosition = gl.getUniformLocation(program, "u_resolution")
  const timePosition = gl.getUniformLocation(program, "u_time")
  const shouldInvertPosition = gl.getUniformLocation(program, "u_shouldInvert")
  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  let shouldInvert = !mql.matches

  mql.addListener((e) => {
    if (e.matches) {
      shouldInvert = false
    } else {
      shouldInvert = true
    }
  })

  // The main render loop
  // First, we'll start a random seed to create a different starting scene on
  // each canvas mount
  const seed = Math.round(Math.random() * 20000)

  let running = true

  function render(now: number) {
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

export default function renderWebGLLayer(canvas: HTMLCanvasElement) {
  return init(canvas)
}
