/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		this.time = 0;
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,    //0
			1, 0, 0,	//1
			0, 1, 0,    //2
			
			0, 0, 0,    //3
			1, 0, 0,	//4
			0, 1, 0	    //5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			0, 2, 1,
			
			3, 4, 5,
			3, 5, 4
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		];

		this.texCoords = [
			1, 0,
			1, 1,
			0, 0,
			
			1, 0,
			1, 1,
			0, 0
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
