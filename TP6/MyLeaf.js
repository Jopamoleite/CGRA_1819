/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
	constructor(scene) {
		super(scene);
		this.triangle = new MyTriangle(this.scene);
	    this.leafMaterial = new CGFappearance(this.scene);
        this.leafMaterial.setAmbient(0.4, 0.9, 0.2, 1.0);
        this.leafMaterial.setDiffuse(0.4, 0.9, 0.2, 1.0);
        this.leafMaterial.setSpecular(0.2, 0.2, 0.2, 1.0);
        this.leafMaterial.setShininess(10.0);
	}
	display(){
	    this.leafMaterial.apply();
	    this.triangle.display();
	}

}