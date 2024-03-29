/**
* MyPerson
* @constructor
*/
class MyPerson extends CGFobject {
    constructor(scene) {
        super(scene);

        //Vector with position used to check for collisions on MyScene
        this.position = [-10.5, 2.5, 5.5];

        this.initMaterials();

        //Initialization of the different parts
        this.head = new MySphere(this.scene, 1, 10, 10, this.skinMaterial, this.hairMaterial);
        this.upperBody = new MyCylinder(this.scene, 6);
        this.lowerBody = new MyCylinder(this.scene, 6);
        this.arm1 = new MyUnitCubeQuad(this.scene, this.skinMaterial, this.skinMaterial, this.skinMaterial, this.skinMaterial, this.skinMaterial, this.skinMaterial);
        this.arm2 = new MyUnitCubeQuad(this.scene, this.skinMaterial, this.skinMaterial, this.skinMaterial, this.skinMaterial, this.skinMaterial, this.skinMaterial);
        this.leg1 = new MyUnitCubeQuad(this.scene, this.skinMaterial, this.skinMaterial, this.skinMaterial, this.skinMaterial, this.skinMaterial, this.skinMaterial);
        this.leg2 = new MyUnitCubeQuad(this.scene, this.skinMaterial, this.skinMaterial, this.skinMaterial, this.skinMaterial, this.skinMaterial, this.skinMaterial);
        this.eyeSide1 = new MyCylinder(this.scene, 6);
        this.eyeFront1 = new MyCylinderCover(this.scene, 6);
        this.eyeSide2 = new MyCylinder(this.scene, 6);
        this.eyeFront2 = new MyCylinderCover(this.scene, 6);
        this.mouth = new MyHalfSphere(this.scene, 1, 10, 10);
    }

    //Initialization of the materials
    initMaterials(){
        
        this.skinTexture = new CGFtexture(this.scene, 'images/skin.png');

        this.skinMaterial = new CGFappearance(this.scene);
        this.skinMaterial.setAmbient(0.7, 0.5, 0.5, 1.0);
        this.skinMaterial.setDiffuse(0.7, 0.5, 0.5, 1.0);
        this.skinMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.skinMaterial.setShininess(10.0);
        this.skinMaterial.setTexture(this.skinTexture);
        this.skinMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.hairTexture = new CGFtexture(this.scene, 'images/hair.png');

        this.hairMaterial = new CGFappearance(this.scene);
        this.hairMaterial.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.hairMaterial.setDiffuse(0.3, 0.3, 0.3, 1.0);
        this.hairMaterial.setSpecular(0.2, 0.2, 0.2, 1.0);
        this.hairMaterial.setShininess(10.0);
        this.hairMaterial.setTexture(this.hairTexture);
        this.hairMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.jeansTexture = new CGFtexture(this.scene, 'images/jeans.png');

        this.jeansMaterial = new CGFappearance(this.scene);
        this.jeansMaterial.setAmbient(0.3, 0.0, 0.5, 1.0);
        this.jeansMaterial.setDiffuse(0.3, 0.0, 0.5, 1.0);
        this.jeansMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.jeansMaterial.setShininess(10.0);
        this.jeansMaterial.setTexture(this.jeansTexture);
        this.jeansMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.shirtTexture = new CGFtexture(this.scene, 'images/shirt.png');

        this.shirtMaterial = new CGFappearance(this.scene);
        this.shirtMaterial.setAmbient(0.7, 0.7, 0.7, 1.0);
        this.shirtMaterial.setDiffuse(0.7, 0.7, 0.7, 1.0);
        this.shirtMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.shirtMaterial.setShininess(10.0);
        this.shirtMaterial.setTexture(this.shirtTexture);
        this.shirtMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.eyeTexture = new CGFtexture(this.scene, 'images/personEye.png');

        this.eyeMaterial = new CGFappearance(this.scene);
        this.eyeMaterial.setAmbient(0.8, 0.8, 0.8, 1.0);
        this.eyeMaterial.setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.eyeMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.eyeMaterial.setShininess(10.0);
        this.eyeMaterial.setTexture(this.eyeTexture);
        this.eyeMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.eyeSideTexture = new CGFtexture(this.scene, 'images/eyeSide.png');

        this.eyeSideMaterial = new CGFappearance(this.scene);
        this.eyeSideMaterial.setAmbient(0.8, 0.8, 0.8, 1.0);
        this.eyeSideMaterial.setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.eyeSideMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.eyeSideMaterial.setShininess(10.0);
        this.eyeSideMaterial.setTexture(this.eyeSideTexture);
        this.eyeSideMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.lipsTexture = new CGFtexture(this.scene, 'images/lips.png');

        this.lipsMaterial = new CGFappearance(this.scene);
        this.lipsMaterial.setAmbient(0.7, 0.7, 0.7, 1.0);
        this.lipsMaterial.setDiffuse(0.7, 0.7, 0.7, 1.0);
        this.lipsMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.lipsMaterial.setShininess(10.0);
        this.lipsMaterial.setTexture(this.lipsTexture);
        this.lipsMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    //Displays the person
    display(){
        this.scene.pushMatrix();
        this.scene.scale(0.75, 0.75, 0.75);
        
        this.scene.pushMatrix();
        this.scene.scale(0.15, 0.15, 0.15);
        this.scene.translate(2, 6.25, -3);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.eyeMaterial.apply();
        this.eyeFront1.display();
        this.eyeSideMaterial.apply();
        this.eyeSide1.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.scale(0.15, 0.15, 0.15);
        this.scene.translate(-2, 6.25, -3);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.eyeMaterial.apply();
        this.eyeFront2.display();
        this.eyeSideMaterial.apply();
        this.eyeSide2.display();
        this.scene.popMatrix();
        
        
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/10, 1, 0, 0);
        this.scene.scale(0.5, 0.5, 0.15);
        this.scene.translate(0, 1.15, -0.5);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.lipsMaterial.apply();
        this.mouth.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(5*Math.PI/3, 1, 0, 0);
        this.head.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.shirtMaterial.apply();
        this.scene.translate(0, 0, 0.7);
        this.scene.scale(0.7, 0.7, 1.25);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.upperBody.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.jeansMaterial.apply();
        this.scene.translate(0, 0, 1.95);
        this.scene.scale(0.7, 0.7, 1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.lowerBody.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/6, 1, 0, 0);
        this.scene.translate(0.75, 1.5, 1);
        this.scene.scale(0.25, 1.5, 0.25);
        this.arm1.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/6, 1, 0, 0);
        this.scene.translate(-0.75, 1.5, 1);
        this.scene.scale(0.25, 1.5, 0.25);
        this.arm2.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/12, 0, 0, 1);
        this.scene.translate(-0.5, 1, 2.7);
        this.scene.scale(0.25, 1.5, 0.25);
        this.leg1.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/12, 0, 0, 1);
        this.scene.translate(0.5, 1, 2.7);
        this.scene.scale(0.25, 1.5, 0.25);
        this.leg2.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}


