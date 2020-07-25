/* eslint-disable @typescript-eslint/no-non-null-assertion */
import fragShaderSource from "./shader.frag"
import vertShaderSource from "./shader.vert"

let gl: WebGLRenderingContext
let canvas: HTMLCanvasElement
let buffer: WebGLBuffer
let program: WebGLProgram

function init(canvas: HTMLCanvasElement) {
  console.log("initing")
  const seed = Math.random() * 200
  gl = canvas.getContext("webgl")!
  canvas.width = canvas.clientWidth
  canvas.height = canvas.clientHeight
  gl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight)
  buffer = gl.createBuffer()!
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

  program = gl.createProgram()!
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  gl.useProgram(program)

  function render(now: number) {
    gl.clear(gl.COLOR_BUFFER_BIT)
    const positionLocation = gl.getAttribLocation(program, "a_position")
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    const resolution = [canvas.clientWidth, canvas.clientHeight]
    const resolutionPosition = gl.getUniformLocation(program, "u_resolution")
    gl.uniform2fv(resolutionPosition, resolution)

    const timePosition = gl.getUniformLocation(program, "u_time")
    gl.uniform1f(timePosition, now / 2000.0 + seed)

    gl.drawArrays(gl.TRIANGLES, 0, 6)

    window.requestAnimationFrame(render)
  }

  render(0)
}

export default function renderWebGLLayer(canvas: HTMLCanvasElement) {
  init(canvas)
}
