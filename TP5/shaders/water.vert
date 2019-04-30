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

	vec4 mapCoords = texture2D(uSampler2, vec2(timeFactor*.01,timeFactor*.01)+vTextureCoord);

	vec3 offset = aVertexNormal*sin(timeFactor)*0.01*mapCoords.b*normScale;
	
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

}

