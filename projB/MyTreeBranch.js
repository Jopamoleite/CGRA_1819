/**
* MyTreeBranch
* @constructor
*/
class MyTreeBranch extends CGFobject {
    constructor(scene, x, y, z) {
        super(scene);

        //Position used to check for collisions on MyScene
        this.position = [x, y, z];

        //Iniialization of the parts
        this.branch = new MyCylinder(this.scene, 6);
        this.branchTop = new MyCylinderCover(this.scene, 6);
        this.branchBot = new MyCylinderCover(this.scene, 6);
        this.minorBranch = new MyCylinder(this.scene, 6);
        this.minorBranchBot = new MyCylinderCover(this.scene, 6);
        this.leaf = new MyTriangle(this.scene);
 
 
        this.initMaterials();
    }

    //Initialization of the materials
    initMaterials(){
        this.woodTexture = new CGFtexture(this.scene, 'images/Trunk2.png');

        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(0.4, 0.2, 0.1, 1.0);
        this.woodMaterial.setDiffuse(0.4, 0.2, 0.1, 1.0);
        this.woodMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.woodMaterial.setShininess(10.0);
        this.woodMaterial.setTexture(this.woodTexture);
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.leafTexture = new CGFtexture(this.scene, 'images/leaf.jpg');
        
        this.leafMaterial = new CGFappearance(this.scene);
        this.leafMaterial.setAmbient(0.3, 0.8, 0.1, 1.0);
        this.leafMaterial.setDiffuse(0.3, 0.8, 0.1, 1.0);
        this.leafMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.leafMaterial.setShininess(10.0);
        this.leafMaterial.setTexture(this.leafTexture);
        this.leafMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    //Displays the branch
    display(){
        this.scene.pushMatrix();
        this.scene.translate(0, 0.25, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);

        this.scene.pushMatrix();
        this.scene.scale(0.25, 2, 0.25);

        this.woodMaterial.apply();
        this.branch.display();
        this.branchBot.display();

        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.branchTop.display();
        this.scene.popMatrix();      
        this.scene.popMatrix();       

        this.scene.pushMatrix();
        this.scene.translate(-0.70, 0.35, 0);
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.scene.scale(0.25, 1, 0.25);
        this.minorBranch.display();
        this.minorBranchBot.display();

        this.leafMaterial.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,1, 0, 0);
        this.leaf.display();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.leaf.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI,1, 0, 0);
        this.leaf.display();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.leaf.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}


