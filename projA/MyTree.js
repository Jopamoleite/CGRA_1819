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
        
    }

    setTopMaterial(){
        this.scene.setAmbient(0.8, 0.0, 0.6, 1.0);
        this.scene.setDiffuse(0.8, 0.0, 0.6, 1.0);
        this.scene.setSpecular(0.2, 0.2, 0.2, 1.0);
        this.scene.setShininess(10.0);
    }

    setTrunkMaterial(){
        this.scene.setAmbient(0.8, 0.4, 0.1, 1.0);
        this.scene.setDiffuse(0.8, 0.4, 0.1, 1.0);
        this.scene.setSpecular(0.2, 0.2, 0.2, 1.0);
        this.scene.setShininess(10.0);
    }


    display() {
       
        this.trunkTexture.apply();
        this.scene.pushMatrix();
        this.setTrunkMaterial();
        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
        this.trunk.display();
        this.scene.popMatrix();

        
        this.treeTopTexture.apply();
        this.scene.pushMatrix();
        this.setTopMaterial();
        this.scene.translate(0.0, this.trunkHeight, 0.0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.treetop.display();
        this.scene.popMatrix();
    }
}


