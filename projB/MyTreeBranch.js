/**
* MyTreeBranch
* @constructor
*/
class MyTreeBranch extends CGFobject {
    constructor(scene, x, y, z) {
        super(scene);

        this.position = [x, y, z];

        this.cylinder = new MyCylinder(this.scene, 6);
        this.cylinderTop = new MyCylinderCover(this.scene, 6);
        this.cylinderBot = new MyCylinderCover(this.scene, 6);
        this.initMaterials();
    }

    initMaterials(){
        this.woodTexture = new CGFtexture(this.scene, 'images/Trunk2.png');

        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setTexture(this.woodTexture);
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(0, 0.25, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.25, 2, 0.25);

        this.woodMaterial.apply();
        this.cylinder.display();
        this.cylinderBot.display();

        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.cylinderTop.display();
        this.scene.popMatrix();
        
        this.scene.popMatrix();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


