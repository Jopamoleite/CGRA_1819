/**
* MyBabyBird
* @constructor
*/
class MyBabyBird extends CGFobject {
    constructor (scene) {
        super(scene);

        this.initMaterials();

        //Initilization of the several body parts
        this.body = new MyCylinder(this.scene, 6);
        this.neck = new MyCone(this.scene, 6);
        this.tail = new MyCone(this.scene, 6);
        this.beak = new MyPyramid(this.scene, 4);     
        this.head = new MySphere(this.scene, 1, 10, 10, this.faceFrontMaterial, this.faceBackMaterial);
        this.rightWing = new MyRightWing(this.scene, this.faceBackMaterial, this.faceFrontMaterial);
        this.leftWing = new MyLeftWing(this.scene, this.faceBackMaterial, this.faceFrontMaterial);
        this.rightEye = new MySphere(this.scene, 1, 8, 5);
        this.leftEye = new MySphere(this.scene, 1, 8, 5);
    }

    //Initilization of the materials
    initMaterials(){
        
        this.featherTexture = new CGFtexture(this.scene, 'images/mix.png');
        this.eyeTexture = new CGFtexture(this.scene, 'images/eye.png');
        this.beakTexture = new CGFtexture(this.scene, 'images/beak.png');
        this.faceFrontTexture = new CGFtexture(this.scene, 'images/faceFront.png');
        this.faceBackTexture = new CGFtexture(this.scene, 'images/faceBack.png');

        this.featherMaterial = new CGFappearance(this.scene);
        this.featherMaterial.setAmbient(0.4, 0.4, 0.3, 1.0);
        this.featherMaterial.setDiffuse(0.4, 0.4, 0.3, 1.0);
        this.featherMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.featherMaterial.setShininess(10.0);
        this.featherMaterial.setTexture(this.featherTexture);
        this.featherMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.eyeMaterial = new CGFappearance(this.scene);
        this.eyeMaterial.setAmbient(0.7, 0.7, 0.7, 1.0);
        this.eyeMaterial.setDiffuse(0.7, 0.7, 0.7, 1.0);
        this.eyeMaterial.setSpecular(0.7, 0.7, 0.7, 1.0);
        this.eyeMaterial.setShininess(10.0);
        this.eyeMaterial.setTexture(this.eyeTexture);
        this.eyeMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.beakMaterial = new CGFappearance(this.scene);
        this.beakMaterial.setAmbient(0.6, 0.4, 0.4, 1.0);
        this.beakMaterial.setDiffuse(0.6, 0.4, 0.4, 1.0);
        this.beakMaterial.setSpecular(0.4, 0.4, 0.4, 1.0);
        this.beakMaterial.setShininess(10.0);
        this.beakMaterial.setTexture(this.beakTexture);
        this.beakMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.faceFrontMaterial = new CGFappearance(this.scene);
        this.faceFrontMaterial.setAmbient(0.4, 0.4, 0.3, 1.0);
        this.faceFrontMaterial.setDiffuse(0.4, 0.4, 0.3, 1.0);
        this.faceFrontMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.faceFrontMaterial.setShininess(10.0);
        this.faceFrontMaterial.setTexture(this.faceFrontTexture);
        this.faceFrontMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.faceBackMaterial = new CGFappearance(this.scene);
        this.faceBackMaterial.setAmbient(0.4, 0.4, 0.3, 1.0);
        this.faceBackMaterial.setDiffuse(0.4, 0.4, 0.3, 1.0);
        this.faceBackMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.faceBackMaterial.setShininess(10.0);
        this.faceBackMaterial.setTexture(this.faceBackTexture);
        this.faceBackMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    //Displays the baby bird
    display() {

        this.scene.pushMatrix();
        this.scene.scale(0.3, 0.3, 0.3);
        
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(-Math.PI/10, 0, 1, 0);
        this.leftWing.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(Math.PI/10, 0, 1, 0);
        this.rightWing.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.featherMaterial.apply();  
        this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 1);
        this.scene.scale(1, 1, 0.5);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.featherMaterial.apply();  
        this.neck.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.featherMaterial.apply();  
        this.tail.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.75, 2);
        this.scene.rotate(Math.PI/6, 1, 0, 0);
        this.head.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.75, 2.97);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.25, 0.5, 0.25);
        this.beakMaterial.apply();
        this.beak.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 1, 2.2);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.rotate(Math.PI/3, 0, 1, 0);
        this.eyeMaterial.apply();
        this.rightEye.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0.5, 1, 2.2);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(Math.PI/3, 0, 1, 0);
        this.eyeMaterial.apply();
        this.leftEye.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}


