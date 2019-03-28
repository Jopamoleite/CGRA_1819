/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
			-1, 0, 0,   //1
			0, 0, 0,	//2
			1, 0, 0,    //3
			2, 0, 0,	//4
			-1, 1, 0,   //5
			0, 1, 0,	//6
			1, 1, 0,    //7
			0, 2, 0,    //8
			
			-2, 0, 0,	//9
			-1, 0, 0,   //10
			0, 0, 0,	//11
			1, 0, 0,    //12
			2, 0, 0,	//13
			-1, 1, 0,   //14
			0, 1, 0,	//15
			1, 1, 0,    //16
			0, 2, 0     //17
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 5,
			1, 2, 5,
			2, 6, 5,
			2, 3, 6,
			3, 7, 6,
			3, 4, 7,
			5, 6, 8,
			6, 7, 8,
			
			9, 14, 10,
			10, 14, 11,
			11, 14, 15,
			11, 15, 12,
			12, 15, 16,
			12, 16, 13,
			14, 17, 15,
			15, 17, 16
		];
		
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
