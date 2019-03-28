/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);

		//creating objects
        this.triangleBig = new MyTriangleBig(this.scene);
       	this.triangleSmall = new MyTriangleSmall(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.diamond = new MyDiamond(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
		
		//creating materials

        this.materialOrange = new CGFappearance(this.scene);
        this.materialOrange.setAmbient(1, 0.6, 0, 1.0);
        this.materialOrange.setDiffuse(1, 0.6, 0, 1.0);
        this.materialOrange.setSpecular(1, 1, 1, 1.0);
        this.materialOrange.setShininess(10.0);

        this.materialBlue = new CGFappearance(this.scene);
        this.materialBlue.setAmbient(0, 0.6, 1, 1.0);
        this.materialBlue.setDiffuse(0, 0.6, 1, 1.0);
        this.materialBlue.setSpecular(1, 1, 1, 1.0);
        this.materialBlue.setShininess(10.0);

        this.materialPink = new CGFappearance(this.scene);
        this.materialPink.setAmbient(1, 0.6, 0.8, 1.0);
        this.materialPink.setDiffuse(1, 0.6, 0.8, 1.0);
        this.materialPink.setSpecular(1, 1, 1, 1.0);
        this.materialPink.setShininess(10.0);

        this.materialYellow = new CGFappearance(this.scene);
        this.materialYellow.setAmbient(1, 1, 0, 1.0);
        this.materialYellow.setDiffuse(1, 1, 0, 1.0);
        this.materialYellow.setSpecular(1, 1, 1, 1.0);
        this.materialYellow.setShininess(10.0);

        this.materialGreen = new CGFappearance(this.scene);
		this.materialGreen.setAmbient(0, 1, 0, 1.0);
        this.materialGreen.setDiffuse(0, 1, 0, 1.0);
        this.materialGreen.setSpecular(1, 1, 1, 1.0);
        this.materialGreen.setShininess(10.0);	

        this.materialPurple = new CGFappearance(this.scene);
		this.materialPurple.setAmbient(0.6, 0.3, 0.6, 1.0);
        this.materialPurple.setDiffuse(0.6, 0.3, 0.6, 1.0);
        this.materialPurple.setSpecular(1, 1, 1, 1.0);
        this.materialPurple.setShininess(10.0);

        this.materialRed = new CGFappearance(this.scene);
		this.materialRed.setAmbient(1, 0, 0, 1.0);
        this.materialRed.setDiffuse(1, 0, 0, 1.0);
        this.materialRed.setSpecular(1, 1, 1, 1.0);
        this.materialRed.setShininess(10.0);
	}


        
	display(){
        var trans = [1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			-1.5, -1.0, 0.0, 1.0];

        this.scene.pushMatrix();
        this.scene.translate(-1.6,2.4,0);
        this.scene.rotate(45*Math.PI/180,0,0,1);
        this.materialOrange.apply();
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2,-1,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.materialRed.apply();
        this.triangleSmall.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(2,-1,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.materialPurple.apply();
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(-1.0, 1.0, 1.0);
        this.materialYellow.apply();
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-135*Math.PI/180,0,0,1);
        this.scene.translate(-2,0,0,1);
        this.materialBlue.apply();
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2,2,0);
        this.scene.rotate(90*Math.PI/180,0,0,1);
        this.materialPink.apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(trans);
        this.scene.customMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();
        }
         
        updateBuffers(complexity){
        }
        
        enableNormalViz() {
		this.diamond.enableNormalViz();
		this.triangle.enableNormalViz();
		this.triangleSmall.enableNormalViz();
		this.triangleBig.enableNormalViz();
		this.parallelogram.enableNormalViz();
        }

        disableNormalViz() {
		this.diamond.disableNormalViz();
		this.triangle.disableNormalViz();
		this.triangleSmall.disableNormalViz();
		this.triangleBig.disableNormalViz();
		this.parallelogram.disableNormalViz();
        }
        
}
