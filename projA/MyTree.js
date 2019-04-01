/**
* MyTree
* @constructor
*/
class MyTree extends CGFobject {
    constructor (scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;

        this.trunk = new MyCylinder(this.scene, 10, 1);
        this.treetop = new MyCone(this.scene, 10, 1);
        
        this.trunkMaterial = new CGFappearance(this.scene);
        this.trunkMaterial.setAmbient(1, 1, 1, 1);
        this.trunkMaterial.setDiffuse(1, 1, 1, 1);
        this.trunkMaterial.setSpecular(1, 1, 1, 1);
        this.trunkMaterial.setShininess(10.0);
        this.trunkMaterial.setTexture(this.trunkTexture);
        
        this.treeTopMaterial = new CGFappearance(this.scene);
        this.treeTopMaterial.setAmbient(1, 1, 1, 1);
        this.treeTopMaterial.setDiffuse(1, 1, 1, 1);
        this.treeTopMaterial.setSpecular(1, 1, 1, 1);
        this.treeTopMaterial.setShininess(10.0);
        this.treeTopMaterial.setTexture(this.treeTopTexture);
    }

    display() {

        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
        //this.trunkMaterial.apply();
        this.trunk.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix();
        //this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.scene.translate(0.0, this.trunkHeight, 0.0);
        //this.treeTopMaterial.apply();
        this.trunk.display();
        this.scene.popMatrix();
    }
}


