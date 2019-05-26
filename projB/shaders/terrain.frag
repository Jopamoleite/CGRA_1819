#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec4 position;

uniform sampler2D uSampler;

uniform sampler2D gradient;

void main() {
	vec4 gradcolor = texture2D(gradient, vec2(0.01, 0.0-position[2]*5.0));
	vec4 color = texture2D(uSampler, vTextureCoord+vec2(0.01,0.01));
	
	gl_FragColor = color*0.5 + gradcolor*0.5;
}