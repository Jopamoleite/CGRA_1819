/**
* MyBoat
* @constructor
*/
class MyBoat extends CGFobject {
    constructor(scene) {
        super(scene);

        this.position = [-10, 1.5, 6];

        //initialization of the different parts
        this.outside = new MyHalfSphere(this.scene, 1, 10, 10);
        this.inside = new MyHalfSphere(this.scene, 1, 10, 10, true);
        this.oar = new MyOar(this.scene);
        this.oar2 = new MyOar(this.scene);


        this.initMaterials();
    }

    //Initialization of the materials
    initMaterials(){
        
        this.woodTexture = new CGFtexture(this.scene, 'images/Trunk.png');

        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(0.6, 0.4, 0.4, 1.0);
        this.woodMaterial.setDiffuse(0.6, 0.4, 0.4, 1.0);
        this.woodMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.woodMaterial.setShininess(10.0);
        this.woodMaterial.setTexture(this.woodTexture);
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    //Displays the boat
    display(){
        this.scene.pushMatrix();
        this.scene.translate(this.position[0], this.position[1], this.position[2]);
        
        
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.scale(1.5, 1.5, 3);
        this.scene.rotate(Math.PI/2, 1, 0, 0);

        this.woodMaterial.apply();
        this.outside.display();
        this.inside.display();

        this.scene.pushMatrix();
        this.scene.translate(0.25, -0.75, 0);
        this.scene.rotate(Math.PI/4, 0, 1, 1);
        this.scene.rotate(-Math.PI/4, 0, 1, 0);
        this.scene.translate(0.9, -0.25, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.5, 1, 0.5);
        this.oar.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 1 , 0);

        this.scene.pushMatrix();
        this.scene.translate(0.25, -0.7, -0.5);
        this.scene.rotate(Math.PI/4, 0, 1, 1);
        this.scene.rotate(-Math.PI/4, 0, 1, 0);
        this.scene.translate(0.9, -0.25, 0);
        this.scene.rotate(-Math.PI/4, 0, 1, 0);
        this.scene.scale(0.5, 1, 0.5);
        this.oar2.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}


