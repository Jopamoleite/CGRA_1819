/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5, 0.5, 0.5, 
			0.5, 0.5, -0.5, 
			-0.5, 0.5, -0.5,
			-0.5, 0.5, 0.5,

			0.5, 0.5, 0.5, 
			0.5, -0.5, 0.5,
			0.5, -0.5, -0.5, 
			0.5, 0.5, -0.5, 
			
			0.5, -0.5, 0.5, 
			-0.5, -0.5, 0.5,
			-0.5, -0.5, -0.5,
			0.5, -0.5, -0.5, 

			-0.5, -0.5, 0.5, 
			-0.5, 0.5, 0.5, 
			-0.5, 0.5, -0.5, 
			-0.5, -0.5, -0.5, 
			
			0.5, 0.5, 0.5,
			-0.5, 0.5, 0.5, 
			-0.5, -0.5, 0.5, 
			0.5, -0.5, 0.5, 

			0.5, 0.5, -0.5, 
			0.5, -0.5, -0.5, 
			-0.5, -0.5, -0.5,
			-0.5, 0.5, -0.5, 

		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 3, 0,
			4, 5, 6,
			6, 7, 4,
			8, 9, 10,
			10, 11, 8,
			12, 13, 14,
			14, 15, 12,
			16, 17, 18,
			18, 19, 16,
			20, 21, 22,
			22, 23, 20
		];

		this.normals = [
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,

			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,

			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,

			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,

			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,


		]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	
    updateBuffers(complexity){
    }
}

