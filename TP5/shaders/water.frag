#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float timeFactor;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord+vec2(timeFactor*.01,timeFactor*.01));
	
	gl_FragColor = color;
}