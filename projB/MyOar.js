/**
* MyOar
* @constructor
*/
class MyOar extends CGFobject {
    constructor(scene) {
        super(scene);

        this.initMaterials();

        //Initialization of the different parts
        this.stick = new MyUnitCubeQuad(this.scene, this.woodMaterial, this.woodMaterial, this.woodMaterial, this.woodMaterial, this.woodMaterial, this.woodMaterial);
        this.cube = new MyUnitCubeQuad(this.scene, this.woodMaterial, this.woodMaterial, this.woodMaterial, this.woodMaterial, this.woodMaterial, this.woodMaterial);
    }

    //Initialization of the materials
    initMaterials(){
        this.woodTexture = new CGFtexture(this.scene, 'images/Trunk.png');

        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(0.3, 0.2, 0.2, 1.0);
        this.woodMaterial.setDiffuse(0.3, 0.2, 0.2, 1.0);
        this.woodMaterial.setSpecular(0.3, 0.3, 0.3, 1.0);
        this.woodMaterial.setShininess(10.0);
        this.woodMaterial.setTexture(this.woodTexture);
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    //Displays an oar
    display(){
        this.scene.pushMatrix();
        this.scene.translate(0, 0.25, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);

        this.scene.pushMatrix();
        this.scene.scale(0.13, 0.35, 0.7);
        this.cube.display();    
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.3);
        this.scene.scale(0.13, 1, 0.4);
        this.cube.display();
        this.scene.popMatrix();
        
        this.scene.popMatrix();
    }
}


