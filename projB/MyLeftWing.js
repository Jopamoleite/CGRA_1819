/**
* MyLeftWing
* @constructor
*/
class MyLeftWing extends CGFobject {
    constructor (scene, topTexture, botTexture) {
        super(scene);

        this.time = 0;

        this.topTexture = topTexture;
        this.botTexture = botTexture;

        //Initialization of the different parts
        this.wingBase = new MyUnitCubeQuad(this.scene, this.topTexture, this.topTexture, this.botTexture, this.topTexture, this.botTexture, this.topTexture); 
        this.wingMiddle = new MyTriangleDepth(this.scene, this.topTexture, this.botTexture, this.topTexture, this.topTexture, this.topTexture);
        this.wingEnd = new MyTriangleDepth(this.scene, this.botTexture, this.botTexture, this.botTexture, this.botTexture, this.botTexture);
    }

    //Displays the left wing
    //Three different rotations that depend on a time variable, which allow the wing to move more smoothly and feel more realistic
    //The first rotation moves the entire wing, the second one moves everything but the base, and the last one moves only the tip
    display() {

        this.scene.pushMatrix();
        this.scene.translate(1, 0, 1);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/10, 0, 1, 0);
        this.scene.translate(1, 0, 0);


        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.rotate(-Math.abs(Math.sin(this.time*Math.PI)), 0, 1, 0);
        this.scene.translate(1, 0, 0);

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.scale(1, 1, 0.05);
        this.scene.translate(0.5, 0.5, 0.5);
        this.wingBase.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.abs(Math.sin(this.time*Math.PI)), 0, 1, 0);
 
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 0.05);
        this.wingMiddle.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.translate(1, 0, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);

        this.scene.pushMatrix();
        this.scene.rotate(Math.abs(Math.sin(this.time*Math.PI)), 0, 1, 0);
        this.scene.scale(Math.sqrt(2), Math.sqrt(2), 1);
        this.scene.scale(1, 1, 0.05);
        this.wingEnd.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }

    //Receives the time from MyBird, to move synchronized with it
    //t is symmetrical to t received by MyRighttWing
    update(t){
        this.time = t;
    }
}


