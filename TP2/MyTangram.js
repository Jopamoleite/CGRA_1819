/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
	}
	
	display(){
        var trans = [1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			-1.5, -1.0, 0.0, 1.0];

        this.scene.pushMatrix();
        this.scene.translate(-1.6,2.4,0);
        this.scene.rotate(45*Math.PI/180,0,0,1);
        this.scene.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2,-1,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.scene.triangleSmall.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(2,-1,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.scene.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(-1.0, 1.0, 0.0);
        this.scene.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-135*Math.PI/180,0,0,1);
        this.scene.translate(-2,0,0,1);
        this.scene.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2,2,0);
        this.scene.rotate(90*Math.PI/180,0,0,1);
        this.scene.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(trans);
        this.scene.diamond.display();
        this.scene.popMatrix();
	}
}
