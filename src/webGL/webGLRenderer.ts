/* eslint-disable @typescript-eslint/no-non-null-assertion */
import fragShaderSource from "./shader.frag"
import vertShaderSource from "./shader.vert"

function init(canvas: HTMLCanvasElement) {
  let glCanvas: HTMLCanvasElement | OffscreenCanvas

  let ctx: CanvasRenderingContext2D | ImageBitmapRenderingContext

  let offscreen = false
  const seed = Math.round(Math.random() * 20000)
  canvas.width = canvas.clientWidth * 0.75
  canvas.height = canvas.clientHeight * 0.75

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

  const vertexShader = gl.createShader(gl.VERTEX_SHADER)!
  gl.shaderSource(vertexShader, vertShaderSource)
  gl.compileShader(vertexShader)

  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!
  gl.shaderSource(fragmentShader, fragShaderSource)
  gl.compileShader(fragmentShader)

  const program = gl.createProgram()!
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  gl.useProgram(program)

  gl.deleteShader(vertexShader)
  gl.deleteShader(fragmentShader)
  gl.deleteProgram(program)

  const positionLocation = gl.getAttribLocation(program, "a_position")
  gl.enableVertexAttribArray(positionLocation)

  const resolution = [canvas.clientWidth, canvas.clientHeight]
  const resolutionPosition = gl.getUniformLocation(program, "u_resolution")
  const timePosition = gl.getUniformLocation(program, "u_time")

  function render(now: number) {
    gl.clear(gl.COLOR_BUFFER_BIT)

    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
    gl.uniform2fv(resolutionPosition, resolution)
    gl.uniform1f(timePosition, now / 2000.0 + seed)

    gl.drawArrays(gl.TRIANGLES, 0, 6)
    if (offscreen) {
      const frame = (glCanvas as OffscreenCanvas).transferToImageBitmap()
      ;(ctx as ImageBitmapRenderingContext).transferFromImageBitmap(frame)
    } else {
      ;(ctx as CanvasRenderingContext2D).drawImage(gl.canvas, 0, 0)
    }

    window.requestAnimationFrame(render)
  }

  render(0)
}

export default function renderWebGLLayer(canvas: HTMLCanvasElement) {
  init(canvas)
}
