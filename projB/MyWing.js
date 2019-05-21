/**
* MyWing
* @constructor
*/
class MyWing extends CGFobject {
    constructor (scene) {
        super(scene);

        this.wingBase = new MyQuadBothFaces(this.scene);
        this.wingMiddle = new MyTriangle(this.scene);
        this.wingEnd = new MyTriangle(this.scene);
    }

    display() {
        
        this.scene.pushMatrix();
        
        this.scene.translate(1, 0, 1);
        this.scene.scale(0.5, 0.5, 1);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);

        this.wingBase.display();

        this.scene.pushMatrix();
        this.scene.translate(1, 0, 0);
        this.wingMiddle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1, 1, 0);
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.scene.scale(Math.sqrt(2), Math.sqrt(2), 1);
        this.wingEnd.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}


