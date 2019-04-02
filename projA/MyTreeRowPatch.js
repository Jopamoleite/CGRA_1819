/**
* MyTree
* @constructor
*/
class MyTreeRowPatch extends CGFobject {
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

    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(this.startingX, 0.0, this.startingZ);   

        this.tree.display();
        
        this.scene.pushMatrix();
        this.scene.translate(5.0, 0.0, 0.5);
        this.tree2.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(11.0, 0.0, -0.5);
        this.tree3.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(17.0, 0.0, 0);
        this.tree4.display();
        this.scene.popMatrix();
      
        this.scene.pushMatrix();
        this.scene.translate(22.0, 0.0, -1);
        this.tree5.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(26.0, 0.0, 1);
        this.tree6.display();
        this.scene.popMatrix();
 
        this.scene.popMatrix();
    }
}


