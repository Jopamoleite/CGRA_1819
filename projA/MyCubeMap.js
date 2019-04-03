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
                
        this.roofTexture = new CGFtexture(this.scene, 'images/bricks.png');
        this.wallTexture = new CGFtexture(this.scene, 'images/stone.png');
        this.roofMaterial = new CGFappearance(this.scene);
        this.roofMaterial.setAmbient(1, 1, 1, 1);
        this.roofMaterial.setDiffuse(1, 1, 1, 1);
        this.roofMaterial.setSpecular(1, 1, 1, 1);
        this.roofMaterial.setShininess(10.0);
        this.roofMaterial.setTexture(this.roofTexture);
        this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.wallMaterial = new CGFappearance(this.scene);
        this.wallMaterial.setAmbient(1, 1, 1, 1);
        this.wallMaterial.setDiffuse(1, 1, 1, 1);
        this.wallMaterial.setSpecular(1, 1, 1, 1);
        this.wallMaterial.setShininess(10.0);
        this.wallMaterial.setTexture(this.wallTexture);
        this.wallMaterial.setTextureWrap('REPEAT', 'REPEAT');

                this.txCoords = [0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0];
                this.quad.updateTexCoords(this.txCoords);
	}

	display(){
                this.scene.pushMatrix();
                this.scene.scale(this.scale,this.scale,this.scale);
                this.scene.translate(0, 0.5, 0);

                this.wallMaterial.apply();
	        this.scene.pushMatrix();        
                this.scene.translate(0,0,0.5);
                this.quad.display();
                this.scene.popMatrix();

                this.roofMaterial.apply();
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI,0,1,0);
                this.scene.translate(0,0,0.5);
                this.quad.display();
                this.scene.popMatrix();

                this.wallMaterial.apply();
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI/2,0,1,0);
                this.scene.translate(0, 0, 0.5);
                this.quad.display();
                this.scene.popMatrix();

                this.roofMaterial.apply();
                this.scene.pushMatrix();
                this.scene.rotate(3*Math.PI/2,0,1,0);
                this.scene.translate(0, 0, 0.5);
                this.quad.display();
                this.scene.popMatrix();

                this.wallMaterial.apply();
                this.scene.pushMatrix();
                this.scene.rotate(Math.PI/2,1,0,0);
                this.scene.translate(0, 0, 0.5);
                this.quad.display();
                this.scene.popMatrix();

                this.roofMaterial.apply();
                this.scene.pushMatrix();
                this.scene.rotate(-Math.PI/2,1,0,0);
                this.scene.translate(0, 0, 0.5);
                this.quad.display();
                this.scene.popMatrix();
                
                this.scene.popMatrix();
	}
}
