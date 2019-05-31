/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, textureSide1, textureSide2, textureSide3, textureSide4, textureTop, textureBot) {
		super(scene);
        this.quad = new MyQuad(this.scene);
        this.textureSide1 = textureSide1;
        this.textureSide2 = textureSide2;
        this.textureSide3 =  textureSide3;
        this.textureSide4 =  textureSide4;
        this.textureTop = textureTop;
        this.textureBot = textureBot;

        this.txCoords = [0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0];
        this.quad.updateTexCoords(this.txCoords);
	}

	display(){

		this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.textureSide1.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.translate(0, 0, 0.5);
        this.textureSide2.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,0,0.5);
        this.textureSide3.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(3*Math.PI/2,0,1,0);
        this.scene.translate(0, 0, 0.5);
        this.textureSide4.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.setShininess(10.0);
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.scene.translate(0, 0, 0.5);
        this.textureTop.apply();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.translate(0, 0, 0.5);
        this.textureBot.apply();
        this.quad.display();
        this.scene.popMatrix();
        
	}
}
