/* eslint-disable @typescript-eslint/no-non-null-assertion */
import fragShaderSource from "./shader.frag"
import vertShaderSource from "./shader.vert"

function init(canvas: HTMLCanvasElement) {
  const glCanvas = document.createElement("canvas")

  glCanvas.width = canvas.width = canvas.clientWidth * 0.75
  glCanvas.height = canvas.height = canvas.clientHeight * 0.75
  const ctx = canvas.getContext("2d")!

  let gl: WebGLRenderingContext
  const seed = Math.round(Math.random() * 20000)
  if ("OffscreenCanvas" in window) {
    gl = new OffscreenCanvas(canvas.width, canvas.height).getContext("webgl")!
  } else {
    gl = glCanvas.getContext("webgl")!
  }

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

    ctx.drawImage(gl.canvas, 0, 0)

    window.requestAnimationFrame(render)
  }

  render(0)
}

export default function renderWebGLLayer(canvas: HTMLCanvasElement) {
  init(canvas)
}
