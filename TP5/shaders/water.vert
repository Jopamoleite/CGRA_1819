attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

uniform float normScale;
uniform float timeFactor;

void main() {
	
	vTextureCoord = aTextureCoord;

	vec4 filter = texture2D(uSampler2, aTextureCoord) * vec4(1.0, sin(timeFactor), 1.0, 1.0);

	float extraY = filter.y*normScale;
	
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0) + vec4(0.0, extraY, 0.0, 0.0);

}

