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
        this.triangleBig2 = new MyTriangleBig(this.scene);
       	this.triangleSmall = new MyTriangleSmall(this.scene);
       	this.triangleSmall2 = new MyTriangleSmall(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.diamond = new MyDiamond(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.textureTangram = new CGFtexture(this.scene, 'images/tangram.png');
		
		//creating materials
        this.tangramMaterial = new CGFappearance(this.scene);
        this.tangramMaterial.setAmbient(1, 1, 1, 1);
        this.tangramMaterial.setDiffuse(1, 1, 1, 1);
        this.tangramMaterial.setSpecular(1, 1, 1, 1);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.setTexture(this.textureTangram);

        this.lightBlueTriangleCoords = [
            0.25, 0.75,
            0.75, 0.75,
            0.5, 0.5,
            
            0.25, 0.75,
            0.75, 0.75,
            0.5, 0.5	
        ]
        
		this.pinkTriangleCoords = [
			1.0, 1.0,
			1.0, 0.0,
			0.5, 0.5,
			
			1.0, 1.0,
			1.0, 0.0,
			0.5, 0.5
        ]        
        this.triangleBig2.updateTexCoords(this.pinkTriangleCoords);
        this.triangleSmall2.updateTexCoords(this.lightBlueTriangleCoords);
	}


        
	display(){
        var trans = [1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			-1.5, -1.0, 0.0, 1.0];

        this.tangramMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(-1.6,2.4,0);
        this.scene.rotate(45*Math.PI/180,0,0,1);
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2,-1,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.triangleSmall.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(2,-1,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.triangleSmall2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(-1.0, 1.0, 1.0);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-135*Math.PI/180,0,0,1);
        this.scene.translate(-2,0,0,1);
        this.triangleBig2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2,2,0);
        this.scene.rotate(90*Math.PI/180,0,0,1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(trans);
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
