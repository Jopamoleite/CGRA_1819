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

        this.trunk = new MyCylinder(this.scene, 5, 1);
        this.treetop = new MyCone(this.scene, 10, 1);
        
    }

    display() {

        this.trunkTexture.apply();
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
        this.trunk.display();
        this.scene.popMatrix();

        
        this.treeTopTexture.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.0, this.trunkHeight, 0.0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.treetop.display();
        this.scene.popMatrix();
    }
}


