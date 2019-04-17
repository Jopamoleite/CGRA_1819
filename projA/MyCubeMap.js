/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene, scale) {
		super(scene);
                this.quad = new MyQuad(this.scene,undefined,true);
                this.scale = scale;
                
        this.skyTexture = new CGFtexture(this.scene, 'images/skyboxDay.png');
        this.skyMaterial = new CGFappearance(this.scene);
        this.skyMaterial.setAmbient(1, 1, 1, 1);
        this.skyMaterial.setDiffuse(1, 1, 1, 1);
        this.skyMaterial.setSpecular(1, 1, 1, 1);
        this.skyMaterial.setShininess(10.0);
        this.skyMaterial.setTexture(this.skyTexture);
        this.skyMaterial.setTextureWrap('REPEAT', 'REPEAT');
        this.txCoords = [0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0];
        this.quad.updateTexCoords(this.txCoords);
	}

	display(){
                this.scene.pushMatrix();
                this.scene.scale(this.scale,this.scale,this.scale);
                this.scene.translate(0, 0.5, 0);

                this.skyMaterial.apply();
                this.quad.updateTexCoords([0.25, 0.66, 0.5, 0.66, 0.25, 0.34, 0.5, 0.34]);
	        this.scene.pushMatrix();        
                this.scene.translate(0,0,0.5);
                this.quad.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.quad.updateTexCoords([0.5, 0.66, 0.75, 0.66, 0.5, 0.34, 0.75, 0.34]);
                this.scene.rotate(Math.PI/2,0,1,0);
                this.scene.translate(0, 0, 0.5);
                this.quad.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.quad.updateTexCoords([0.75, 0.66, 1.0, 0.66, 0.75, 0.34, 1.0, 0.34]);
                this.scene.rotate(Math.PI,0,1,0);
                this.scene.translate(0,0,0.5);
                this.quad.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.quad.updateTexCoords([0, 0.66, 0.25, 0.66, 0, 0.34, 0.25, 0.34]);
                this.scene.rotate(3*Math.PI/2,0,1,0);
                this.scene.translate(0, 0, 0.5);
                this.quad.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.quad.updateTexCoords([0.25, 0.34, 0.5, 0.34, 0.25, 0.0, 0.5, 0.0]);
                this.scene.rotate(-Math.PI/2,1,0,0);
                this.scene.translate(0, 0, 0.5);
                this.quad.display();
                this.scene.popMatrix();
                
                this.scene.popMatrix();
	}
}
