/**
* MyWingBack
* @constructor
*/
class MyWingBack extends CGFobject {
    constructor (scene) {
        super(scene);

        this.time = 0;

        this.wingMiddle = new MyTriangle(this.scene);
        this.wingEnd = new MyTriangle(this.scene);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 0, Math.sin(this.time)*1.8);
        this.scene.rotate(Math.sin(this.time), 0, 1, 0);

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

    update(t){
        this.time = t;
    }
}


