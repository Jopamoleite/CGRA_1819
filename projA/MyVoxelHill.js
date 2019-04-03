/**
* MyVoxelHill
* @constructor
*/

class MyVoxelHill extends CGFobject {
    constructor(scene, levels){
        super(scene);
        this.levels = levels;
        
        this.wallTexture = new CGFtexture(this.scene, 'images/stone.png');
        this.wallMaterial = new CGFappearance(this.scene);
        this.wallMaterial.setAmbient(1, 1, 1, 1);
        this.wallMaterial.setDiffuse(1, 1, 1, 1);
        this.wallMaterial.setSpecular(1, 1, 1, 1);
        this.wallMaterial.setShininess(10.0);
        this.wallMaterial.setTexture(this.wallTexture);
        this.wallMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.quad = new MyUnitCubeQuad(this.scene, this.wallMaterial, this.wallMaterial);
    }
    display(){
       var side = 1 + 2*(this.levels-1);
      
       for(var i = 0; i<this.levels; i++){
           for(var line = 0; line<side; line++){
               for(var column = 0; column<side; column++){
                   this.scene.pushMatrix();
                   this.scene.translate(line - side/2 +0.5, i, column - side/2+0.5);
                   this.quad.display();
                   this.scene.popMatrix();
               }
           }
           side -= 2;
       }
    }
}
