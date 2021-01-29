
// Credit for a lot of this code: https://www.shadertoy.com/view/XlSczc
// And credit to Lynn Hu (@Lynn__Hu on Twitter) for the inspiring shader work
// she posted to Instagram (https://www.instagram.com/p/CC-WPxsA0Ot/)

// Turns out highp actually has the best performance on iOS
precision highp float;

#define POINTS 4 // try between 2 and 256, gets slow fast
#define PI 3.1415926536
#define TAU (2.0 * PI)

uniform vec2 resolution;
uniform float time;
uniform int shouldInvert;

// out vec4 fragColor;

vec3 rgb(float r, float g, float b) {
  return vec3(r / 256.0, g / 256.0, b / 256.0);
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  // These colors will come in to use at the end to help constrain the final
  // output colors
  vec3 col1 = hsv2rgb(vec3(0.7922, 0.8255, 0.9451));
  vec3 col2 = hsv2rgb(vec3(0.2039, 0.4314, 0.2118));

  vec2 uv = gl_FragCoord.xy/resolution;

  float bias = pow(10.0, (-0.5) * 20.0 * uv.x);
  float power = 8.0;

  float cN = 0.0;
  // array used to store contributions in first loop
  float contribution[POINTS];

  for (int i = 0; i < POINTS; i++) {
    float f = float(i) / float(POINTS) * TAU;
    vec2 pos = 0.5 + 0.35 * vec2(
      cos(-time * 0.15 + f+ float(i) * -float(i) + time),
    cos(time * 0.25 + f+ float(i) * 0.2)
//      sin(time * 0.8 + f * 2.0) - float(i) * 0.1
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
  vec3 col = vec3(0, 0, 0);
  cN = 1.0 / cN;
  for (int i = 0; i < POINTS; i++) {
    float f = float(i) / float(POINTS) * + time * 0.5;
    vec3 pcol = 0.5 + 0.5 * sin(mix(col1, col2, f * 3.0));
    col += contribution[i] * cN * pcol * mix(col1, col2, 0.5);
  }

  vec3 finalCol = shouldInvert == 0 ? col : 1.0 - col;

  gl_FragColor = vec4(finalCol, 1.0);
}
