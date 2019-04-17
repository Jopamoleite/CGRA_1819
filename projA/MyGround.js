/**
 * MyGround
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyGround extends CGFobject {
	constructor(scene, groundMaterial, scale) {
		super(scene);

		this.groundMaterial = groundMaterial;
		this.scale = scale;

		this.ground = new MyQuad(this.scene);
		var coords= [
			0, this.scale,
			this.scale, this.scale,
			0, 0,
			this.scale, 0
		];
		this.ground.updateTexCoords(coords)
	}


	display(){

		this.scene.groundMaterial.apply();
		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.scale(this.scale,this.scale,0);
		this.scene.translate(0,-0,5,0);
		this.ground.display();
		this.scene.popMatrix();
	}

}

