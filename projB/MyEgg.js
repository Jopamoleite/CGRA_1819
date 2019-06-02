/**
* MyEgg
* @constructor
*/
class MyEgg extends CGFobject {
    constructor(scene) {
        super(scene);

        this.initMaterials();
        this.egg = new MySphere(this.scene, 1, 10, 10, this.eggMaterial, this.eggMaterial);
    }

    initMaterials(){
        
        this.eggTexture = new CGFtexture(this.scene, 'images/egg.png');

        this.eggMaterial = new CGFappearance(this.scene);
        this.eggMaterial.setAmbient(0.9, 0.9, 0.9, 1.0);
        this.eggMaterial.setDiffuse(0.9, 0.9, 0.9, 1.0);
        this.eggMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.eggMaterial.setShininess(10.0);
        this.eggMaterial.setTexture(this.eggTexture);
        this.eggMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){
        this.scene.pushMatrix();
        this.scene.scale(0.75, 1, 0.75);
        this.egg.display();
        this.scene.popMatrix();
    }
}


