attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
varying vec4 position;
varying vec3 offset;
uniform sampler2D uSampler2;

uniform float normScale;

void main() {
	
	vTextureCoord = aTextureCoord;

	vec4 heightColor = texture2D(uSampler2, vTextureCoord);

	vec3 offset = aVertexNormal*heightColor.b*normScale;
	
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
	position = vec4(aVertexPosition + offset, 1.0);

}