/**
 * MyTriangleDepth
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleDepth extends CGFobject {
	constructor(scene) {
        super(scene);
        
        this.triangle1 = new MyTriangle(this.scene);
        this.triangle2 = new MyTriangle(this.scene);
        this.connector1 = new MyQuad(this.scene);
        this.connector2 = new MyQuad(this.scene);
        this.connector3 = new MyQuad(this.scene);
    }
    
    display(){

        this.triangle1.display();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 1);
        this.triangle2.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.translate(0.5, 0.5, 0);
        this.connector1.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(0.5, 0.5, 0);
        this.connector2.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.rotate(3*Math.PI/4, 0, 0, 1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(Math.sqrt(2), 1, 1);
        this.scene.translate(-0.5, 0.5, 0);
        this.connector3.display();
        this.scene.popMatrix();



    }

}
