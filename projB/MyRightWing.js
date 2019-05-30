/**
* MyRightWing
* @constructor
*/
class MyRightWing extends CGFobject {
    constructor (scene) {
        super(scene);

        this.time = 0;

        this.wingBase = new MyUnitCubeQuad(this.scene);  
        this.wingMiddle = new MyTriangleDepth(this.scene);
        this.wingEnd = new MyTriangleDepth(this.scene);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI, 0, 0, 1);
        
        this.scene.pushMatrix();
        this.scene.translate(1, 0, 1);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.rotate(-Math.PI/10, 0, 1, 0);
        this.scene.translate(1, 0, 0);


        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.rotate(Math.abs(Math.sin(this.time*Math.PI)), 0, 1, 0);
        this.scene.translate(1, 0, 0);

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.scale(1, 1, 0.05);
        this.scene.translate(0.5, 0.5, 0.5);
        this.wingBase.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.abs(Math.sin(this.time*Math.PI)), 0, 1, 0);
 
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 0.05);
        this.wingMiddle.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.translate(1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);

        this.scene.pushMatrix();
        this.scene.rotate(-Math.abs(Math.sin(this.time*Math.PI)), 0, 1, 0);
        this.scene.scale(Math.sqrt(2), Math.sqrt(2), 1);
        this.scene.scale(1, 1, 0.05);
        this.wingEnd.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }

    update(t){
        this.time = t;
    }
}


