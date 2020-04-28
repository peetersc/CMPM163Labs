uniform sampler2D texture2;
varying vec2 vUv;

void main() {
  vec2 c = vUv*1.99;
  c.x = mod(c.x, 1.0);
  c.y = mod(c.y, 1.0);
  gl_FragColor = texture2D(texture2, c);
}


