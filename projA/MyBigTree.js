/**
* MyBigTree
* @constructor
*/
class MyBigTree extends CGFobject {
    constructor (scene, trunkTexture, treeTopTexture, startingX, startingZ) {
        super(scene);
        this.startingX = startingX;
        this.startingZ = startingZ;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;

        this.trunk = new MyCylinder(this.scene, 10, 1);
        this.treetop = new MyCone(this.scene, 10, 1);
        
    }

    setTopMaterial(){
        this.scene.setAmbient(1.0, 0.86, 0.64, 1.0);
        this.scene.setDiffuse(1.0, 0.86, 0.64, 1.0);
        this.scene.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.scene.setShininess(10.0);
    }

    setTrunkMaterial(){
        this.scene.setAmbient(0.8, 0.4, 0.1, 1.0);
        this.scene.setDiffuse(0.8, 0.4, 0.1, 1.0);
        this.scene.setSpecular(0.2, 0.2, 0.2, 1.0);
        this.scene.setShininess(10.0);
    }


    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.startingX, 0, this.startingZ);

        this.trunkTexture.apply();
        this.scene.pushMatrix();
        this.setTrunkMaterial();
        this.scene.scale(5, 10, 5);
        this.trunk.display();
        this.scene.popMatrix();

        
        this.treeTopTexture.apply();
        this.scene.pushMatrix();
        this.setTopMaterial();
        this.scene.translate(0.0, 10, 0.0);
        this.scene.scale(15, 15, 15);
        this.treetop.display();
        this.scene.popMatrix();
        
        this.treeTopTexture.apply();
        this.scene.pushMatrix();
        this.setTopMaterial();
        this.scene.translate(0.0, 20, 0.0);
        this.scene.scale(12,12,12);
        this.treetop.display();
        this.scene.popMatrix();
        
        this.treeTopTexture.apply();
        this.scene.pushMatrix();
        this.setTopMaterial();
        this.scene.translate(0.0, 27, 0.0);
        this.scene.scale(10, 10, 10);
        this.treetop.display();
        this.scene.popMatrix();
        
        this.treeTopTexture.apply();
        this.scene.pushMatrix();
        this.setTopMaterial();
        this.scene.translate(0.0, 33, 0.0);
        this.scene.scale(7, 7, 7);
        this.treetop.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}


