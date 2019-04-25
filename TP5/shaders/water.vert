attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float normScale;

void main() {

	vec3 offset=vec3(0.0,0.0,0.0);

	if (texture2D(uSampler, vec2(0.0,0.1)+vTextureCoord).b > 0.85)
		offset=aVertexNormal*normScale*0.1;
	
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

	vTextureCoord = aTextureCoord;
}

