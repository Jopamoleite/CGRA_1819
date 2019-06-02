/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyQuadBothFaces extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
	}

	//Initializes a quad, the same as MyQuad, but does it for both sides
	initBuffers() {
		this.vertices = [
            0, 0, 0,
            1, 0, 0,
            1, 1, 0,
            0, 1, 0,
            
            0, 0, 0,
            1, 0, 0,
            1, 1, 0,
            0, 1, 0
		];
		this.indices = [
			0, 1, 2,
			0, 2, 3,
			4, 6, 5,
			4, 7, 6
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
		];

		this.texCoords = [
			0, 1,
			1, 1,
			0, 0,
			1, 0,
			0, 1,
			1, 1,
			0, 0,
			1, 0
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	
	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}
