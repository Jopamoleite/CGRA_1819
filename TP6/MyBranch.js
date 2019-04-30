/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject{
	constructor(scene) {
        super(scene);
        this.cylinder = new MyCylinder(this.scene, 3);
        
        this.trunkMaterial = new CGFappearance(this.scene);
        this.trunkMaterial.setAmbient(0.8, 0.4, 0.1, 1.0);
        this.trunkMaterial.setDiffuse(0.8, 0.4, 0.1, 1.0);
        this.trunkMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.trunkMaterial.setShininess(10.0);
    }

    display(){
        this.trunkMaterial.apply();
        this.cylinder.display();
    }
}