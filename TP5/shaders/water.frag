#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord+vec2(timeFactor*.01,timeFactor*.01));
	vec4 filter = texture2D(uSampler2, vec2(timeFactor*.01,timeFactor*.01)+vTextureCoord);

		color += filter.b*0.2;
	
	gl_FragColor = color;
}