/**
* MyWing
* @constructor
*/
class MyWing extends CGFobject {
    constructor (scene) {
        super(scene);

        this.time = 0;

        this.wingBase = new MyQuadBothFaces(this.scene);    
        this.wingBack = new MyWingBack(this.scene);
    }

    display() {
        
        this.scene.pushMatrix();
        this.scene.translate(1, 0, 1);
        this.scene.scale(0.5, 0.5, 1);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);

        this.scene.pushMatrix();
        this.scene.rotate(Math.sin(this.time), 0, 1, 0);

        this.wingBase.display();

        this.scene.popMatrix();
        
        this.wingBack.display();
        this.scene.popMatrix();
    }

    update(t){
        this.time = t;
        this.wingBack.update(-t);
    }
}


