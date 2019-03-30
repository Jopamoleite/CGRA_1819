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
			1, 0, 0,	//1
			0, 1, 0,    //2
			
			-1, 0, 0,	//3
			1, 0, 0,	//4
			0, 1, 0	    //5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,

			3, 5, 4
		];
		
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		]

		this.texCoords = [
			0, 0,
			0, 0.5,
			0.25, 0.25,
			
			0, 0,
			0, 0.5,
			0.25, 0.25	
		]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateTexCoords(newCords){
		this.texCoords = newCords;
		this.updateTexCoordsGLBuffers();
	}
}
