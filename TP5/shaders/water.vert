attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float normScale;
uniform float timeFactor;

void main() {

	vec3 offset=vec3(0.0,0.0,0.0);
	
	vTextureCoord = aTextureCoord;

	vec4 filter = texture2D(uSampler, vec2(0.0,0.1)+vTextureCoord);
	
	offset=aVertexNormal*normScale*0.005*sin(timeFactor)*filter.b;
	
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);

}

