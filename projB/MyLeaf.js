/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
	constructor(scene) {
        super(scene);

        //Primitive Initialization
        this.leaf = new MyTriangle(this.scene);

        //Initialization of the material
        this.leafTexture = new CGFtexture(this.scene, 'images/leaf.jpg');
        
        this.leafMaterial = new CGFappearance(this.scene);
        this.leafMaterial.setAmbient(0.3, 0.8, 0.1, 1.0);
        this.leafMaterial.setDiffuse(0.3, 0.8, 0.1, 1.0);
        this.leafMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.leafMaterial.setShininess(10.0);
        this.leafMaterial.setTexture(this.leafTexture);
        this.leafMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    //Displays the leaf
    display(){
        this.leafMaterial.apply();
        this.leaf.display();
    }
}