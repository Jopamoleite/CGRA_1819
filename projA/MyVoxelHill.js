/**
* MyVoxelHill
* @constructor
*/

class MyVoxelHill extends CGFobject {
    constructor(scene, levels, texture1, texture2){
        super(scene);
        this.levels = levels;
        this.quad = new MyUnitCubeQuad(this.scene, texture1, texture2);
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
