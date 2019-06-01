/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject{
	constructor(scene) {
        super(scene);
        this.cylinder = new MyCylinder(this.scene, 5);

        this.trunkTexture = new CGFtexture(this.scene, 'images/wood_tree.jpg');
        
        this.branchMaterial = new CGFappearance(this.scene);
        this.branchMaterial.setAmbient(0.4, 0.2, 0.1, 1.0);
        this.branchMaterial.setDiffuse(0.4, 0.2, 0.1, 1.0);
        this.branchMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.branchMaterial.setShininess(10.0);
        this.branchMaterial.setTexture(this.trunkTexture);
        this.branchMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){
        this.branchMaterial.apply();
        this.cylinder.display();
    }
}
