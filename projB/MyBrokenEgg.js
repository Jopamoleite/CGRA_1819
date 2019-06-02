/**
* MyBrokenEgg
* @constructor
*/
class MyBrokenEgg extends CGFobject {
    constructor(scene) {
        super(scene);

        this.initMaterials();

        //Initialization of the parts
        this.outside = new MyHalfSphere(this.scene, 1, 10, 10);
        this.inside = new MyHalfSphere(this.scene, 1, 10, 10, true);
    }

    //Initialization of the materials
    initMaterials(){
        
        this.eggTexture = new CGFtexture(this.scene, 'images/crackedEgg.png');

        this.eggMaterial = new CGFappearance(this.scene);
        this.eggMaterial.setAmbient(0.9, 0.9, 0.9, 1.0);
        this.eggMaterial.setDiffuse(0.9, 0.9, 0.9, 1.0);
        this.eggMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.eggMaterial.setShininess(10.0);
        this.eggMaterial.setTexture(this.eggTexture);
        this.eggMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    //Displays the broken egg
    display(){
        this.scene.pushMatrix();
        this.scene.scale(0.75, 1, 0.75);

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.eggMaterial.apply();
        this.inside.display();
        this.outside.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}


