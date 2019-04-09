/**
* MyVoxelHill
* @constructor
*/

class MyVoxelHill extends CGFobject {
    constructor(scene, levels, groundMaterial, startingX, startingZ){
        super(scene);
        this.levels = levels;
        this.initMaterials();
        this.topMaterial = groundMaterial;
        this.startingX = startingX;
        this.startingZ = startingZ;

        this.quad = new MyUnitCubeQuad(this.scene, this.sideMaterial, this.sideMaterial, this.sideMaterial, this.sideMaterial, this.topMaterial, this.botMaterial);
    }
    
    initMaterials(){
        
        this.sideTexture = new CGFtexture(this.scene, 'images/hillSide.png');
        this.botTexture = new CGFtexture(this.scene, 'images/hillBot.png');

        this.sideMaterial = new CGFappearance(this.scene);
        this.sideMaterial.setAmbient(1, 1, 1, 1);
        this.sideMaterial.setDiffuse(1, 1, 1, 1);
        this.sideMaterial.setSpecular(1, 1, 1, 1);
        this.sideMaterial.setShininess(10.0);
        this.sideMaterial.setTexture(this.sideTexture);
        this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.botMaterial = new CGFappearance(this.scene);
        this.botMaterial.setAmbient(1, 1, 1, 1);
        this.botMaterial.setDiffuse(1, 1, 1, 1);
        this.botMaterial.setSpecular(1, 1, 1, 1);
        this.botMaterial.setShininess(10.0);
        this.botMaterial.setTexture(this.botTexture);
        this.botMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }

    display(){

        this.scene.pushMatrix();
        this.scene.translate(this.startingX, 0.5, this.startingZ);

       var side = 1 + 2*(this.levels-1);

       for(var i=0; i<this.levels; i++){
            for(var column = 0; column<side; column++){
                this.scene.pushMatrix();
                this.scene.translate(-side/2 + 0.5, i, column - side/2+0.5);
                this.quad.display();
                this.scene.popMatrix();
                this.scene.pushMatrix();
                this.scene.translate(side - 1 - side/2 + 0.5, i, column - side/2 + 0.5);
                this.quad.display();
                this.scene.popMatrix();
            }
            for(var line = 0; line<side; line++){
                this.scene.pushMatrix();
                this.scene.translate(line-side/2 + 0.5, i, -side/2+0.5);
                this.quad.display();
                this.scene.popMatrix();
                this.scene.pushMatrix();
                this.scene.translate(line - side/2 + 0.5, i, side - 1 - side/2 + 0.5);
                this.quad.display();
                this.scene.popMatrix();
            }
            side -= 2;
       }
       this.scene.popMatrix();
    }
}
