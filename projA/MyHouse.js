/**
* MyTree
* @constructor
*/
class MyHouse extends CGFobject {
    constructor (scene, wallSide, roofHeight, roofSide) {
        super(scene);
        this.wallSide = wallSide;
        this.roofHeight = roofHeight;
        this.roofSide = roofSide;

        this.walls = new MyUnitCubeQuad(this.scene);
        this.roof = new MyPyramid(this.scene, 4, 1);
        this.column = new MyPrism(this.scene, 10, 1);
        
    }

    display() {

        this.scene.pushMatrix();
        this.scene.scale(this.wallSide, this.wallSide, this.wallSide);
        this.scene.translate(0.0, 0.5, 0.0);
        this.walls.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.wallSide-1,0,this.wallSide-1);
        this.scene.scale(0.25,3,0.25);
        this.column.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-this.wallSide+1,0,this.wallSide-1);
        this.scene.scale(0.25,3,0.25);
        this.column.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(this.wallSide-1,0,-this.wallSide+1);
        this.scene.scale(0.25,3,0.25);
        this.column.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-this.wallSide+1,0,-this.wallSide+1);
        this.scene.scale(0.25,3,0.25);
        this.column.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0.0, this.wallSide, 0.0);
        this.scene.scale(this.roofSide, this.roofHeight, this.roofSide);
        this.scene.rotate(Math.PI/4, 0.0, 1.0, 0.0);
        this.roof.display();
        this.scene.popMatrix();
    }
}


