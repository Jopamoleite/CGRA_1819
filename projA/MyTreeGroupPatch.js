/**
* MyTree
* @constructor
*/
class MyTreeGroupPatch extends CGFobject {
    constructor (scene, trunkTexture, treeTopTexture, startingX, startingZ) {
        super(scene);        
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;
        this.startingX = startingX;
        this.startingZ = startingZ;

        this.tree = new MyTree(this.scene, 3.0, 1.0, 4.0, 2.0, this.trunkTexture, this.treeTopTexture);
        this.tree2 = new MyTree(this.scene, 2.0, 2.0, 5.0, 3.0, this.trunkTexture, this.treeTopTexture);
        this.tree3 = new MyTree(this.scene, 2.0, 1.0, 4.0, 2.0, this.trunkTexture, this.treeTopTexture);
        this.tree4 = new MyTree(this.scene, 2.0, 2.0, 4.0, 3.0, this.trunkTexture, this.treeTopTexture);
        this.tree5 = new MyTree(this.scene, 2.0, 1.0, 3.0, 2.0, this.trunkTexture, this.treeTopTexture);
        this.tree6 = new MyTree(this.scene, 2.0, 1.0, 4.0, 2.0, this.trunkTexture, this.treeTopTexture);
        this.tree7 = new MyTree(this.scene, 2.0, 1.0, 2.0, 2.0, this.trunkTexture, this.treeTopTexture);
        this.tree8 = new MyTree(this.scene, 3.0, 1.0, 4.0, 2.0, this.trunkTexture, this.treeTopTexture);
        this.tree9 = new MyTree(this.scene, 3.0, 2.0, 4.0, 3.0, this.trunkTexture, this.treeTopTexture);

    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(this.startingX, 0.0, this.startingZ);   

        this.tree.display();
        
        this.scene.pushMatrix();
        this.scene.translate(5.0, 0.0, -0.5);
        this.tree2.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(11.0, 0.0, 0.0);
        this.tree3.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0.0, 0.0, 5.5);
        this.tree4.display();
        this.scene.popMatrix();
      
        this.scene.pushMatrix();
        this.scene.translate(5.0, 0.0, 5.0);
        this.tree5.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(10.0, 0.0, 4.5);
        this.tree6.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.0, 11.0);
        this.tree7.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(5.0, 0.0, 10.5);
        this.tree8.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(10.5, 0.0, 9.5);
        this.tree9.display();
        this.scene.popMatrix();
 
        this.scene.popMatrix();
    }
}


