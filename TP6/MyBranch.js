/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {
	constructor(scene) {
		super(scene);
		this.cylinder = new MyCylinder(this.scene, 3);
	    this.branchMaterial = new CGFappearance(this.scene);
        this.branchMaterial.setAmbient(0.6, 0.6, 0.4, 1.0);
        this.branchMaterial.setDiffuse(0.6, 0.6, 0.4, 1.0);
        this.branchMaterial.setSpecular(0.2, 0.2, 0.2, 1.0);
        this.branchMaterial.setShininess(10.0);
	}
	display(){
	    this.branchMaterial.apply();
	    this.cylinder.display();
	}

}
