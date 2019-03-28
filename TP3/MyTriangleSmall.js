/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			0, 0, 0,    //1
			1, 0, 0,	//2
			0, 1, 0,    //3
			
			-1, 0, 0,	//4
			0, 0, 0,    //5
			1, 0, 0,	//6
			0, 1, 0	    //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 3,
			1, 2, 3,

			4, 7, 5,
			5, 7, 6
		];
		
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
