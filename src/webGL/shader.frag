#ifdef GL_ES
precision lowp float;
#endif

#define POINTS 3 // try between 2 and 256, gets slow fast
#define PI 3.1415926536
#define TAU (2.0 * PI)

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 uv = gl_FragCoord.xy/u_resolution;

  float bias = 1.1;
  float power = -5.0;

  vec2 mouse = vec2(0.1, 0.15);
  bias = pow(10.0, (-0.5 + mouse.x) * 10.0);
  power = 0.5 + mouse.y * 9.5;

  float cN = 0.0;
  // array used to store contributions in first loop
  float contribution[POINTS];

  for (int i = 0; i < POINTS; i++) {
    float f = float(i) / float(POINTS) * TAU;
    vec2 pos = 0.5 + 0.35 * vec2(
      cos(-u_time * 0.15 + f) - sin(-u_time * 0.5 - f),
      sin(u_time * 0.8 + f * 2.0) - cos(-u_time * 0.5 + f * 1.2)
    );
    pos = uv - pos;
    float dist = length(pos);

    // calculate contribution
    float c = 1.0 / (bias + pow(dist, power));
    contribution[i] = c;
    // sum total contribution
    cN += c;
  }

  // normalize contributions and weigh colors
  vec3 col = vec3(0, -0.1, 0);
  cN = 1.0 / cN;
  for (int i = 0; i < POINTS; i++) {
    float f = float(i) / float(POINTS) * TAU + u_time * 0.1;
    vec3 pcol = 0.5 + 0.5 * cos(vec3(f * 2.0, f, f * 3.0));
    col += contribution[i] * cN * pcol;
  }

  gl_FragColor = vec4(col, 1.0);
}