/**
* MyLake
* @constructor
*/
class MyLake extends CGFobject {
    constructor(scene, side, x, z) {
        super(scene);
        this.side = side;
        this.x = x;
        this.z = z;

        this.lakeQuad = new MyQuad(this.scene);

        this.lakeTexture = new CGFtexture(this.scene, 'images/lakewater.png');
        this.lakeMaterial = new CGFappearance(this.scene);
        this.lakeMaterial.setAmbient(0, 0.5, 0.8, 1);
        this.lakeMaterial.setDiffuse(0, 0.5, 0.8, 1);
        this.lakeMaterial.setSpecular(1, 1, 1, 1);
        this.lakeMaterial.setShininess(10.0);
        this.lakeMaterial.setTexture(this.lakeTexture);
        this.lakeMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    
    display(){
        
        this.scene.pushMatrix();
        this.lakeMaterial.apply();
        this.scene.translate(this.x, 2, this.z);
        this.scene.scale(this.side, 0, this.side);
        this.lakeQuad.display();
        this.scene.popMatrix();

    }
}