#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;

void main() {
	vec4 color = texture2D(uSampler2, vTextureCoord);
	vec4 filter = texture2D(uSampler, vec2(0.0,0.1)+vTextureCoord);

	if (filter.b > 0.5)
		color *=(filter.b+0.4);
	
	gl_FragColor = color;
}