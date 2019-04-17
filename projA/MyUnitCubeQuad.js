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

        this.textureSide1.apply();
		this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.textureSide2.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.textureSide3.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.textureSide4.apply();
        this.scene.pushMatrix();
        this.scene.rotate(3*Math.PI/2,0,1,0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.textureTop.apply();
		this.scene.setAmbient(0.7, 1, 0.5, 1.0);
        this.scene.setDiffuse(0.7, 1, 0.5, 1.0);
        this.scene.setSpecular(0.3, 0.5, 0.2, 1.0);
        this.scene.setShininess(10.0);
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.textureBot.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

	}
}
