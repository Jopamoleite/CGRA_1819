/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
	constructor(scene) {
        super(scene);
        this.leaf = new MyTriangle(this.scene);
        
        this.leafMaterial = new CGFappearance(this.scene);
        this.leafMaterial.setAmbient(0.1, 0.8, 0.1, 1.0);
        this.leafMaterial.setDiffuse(0.1, 0.8, 0.1, 1.0);
        this.leafMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.leafMaterial.setShininess(10.0);
    }

    display(){
        this.leafMaterial.apply();
        this.leaf.display();
    }
}