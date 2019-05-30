/**
* MyBird
* @constructor
*/
class MyBird extends CGFobject {
    constructor (scene) {
        super(scene);

        this.initMaterials();

        this.time = 0;
        this.deltaT = 0;
        this.rotation = 0;
        this.speed = 0;
        this.position = [0, 0, 0];


        this.body = new MyCylinder(this.scene, 6);
        this.neck = new MyCone(this.scene, 6);
        this.tail = new MyCone(this.scene, 6);
        this.beak = new MyPyramid(this.scene, 4);     
        this.head = new MySphere(this.scene, 1, 10, 10);
        this.rightWing = new MyRightWing(this.scene);
        this.leftWing = new MyLeftWing(this.scene);
        this.rightEye = new MySphere(this.scene, 1, 8, 5);
        this.leftEye = new MySphere(this.scene, 1, 8, 5);
    }

    initMaterials(){
        
        this.featherTexture = new CGFtexture(this.scene, 'images/feather.png');
        this.eyeTexture = new CGFtexture(this.scene, 'images/eye.png');
        this.beakTexture = new CGFtexture(this.scene, 'images/beak.png');

        this.featherMaterial = new CGFappearance(this.scene);
        this.featherMaterial.setTexture(this.featherTexture);
        this.featherMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.eyeMaterial = new CGFappearance(this.scene);
        this.eyeMaterial.setTexture(this.eyeTexture);
        this.eyeMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.beakMaterial = new CGFappearance(this.scene);
        this.beakMaterial.setTexture(this.beakTexture);
        this.beakMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }


    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, Math.sin(this.time*Math.PI), 0);
        this.scene.translate(this.position[0], this.position[1], this.position[2]);
        this.scene.rotate(this.rotation, 0, 1, 0);

        this.scene.pushMatrix();
        this.scene.scale(0.35*this.scene.scaleFactor, 0.35*this.scene.scaleFactor, 0.35*this.scene.scaleFactor);
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.25);
        this.featherMaterial.apply();
        this.leftWing.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.25);
        this.featherMaterial.apply();
        this.rightWing.display();
        this.scene.popMatrix();

        this.featherMaterial.apply();  
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 1);
        this.scene.scale(1, 1, 0.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.neck.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.tail.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.75, 2);
        this.head.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.75, 2.97);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(0.25, 0.25, 0.25);
        this.beakMaterial.apply();
        this.beak.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 1, 2.2);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.eyeMaterial.apply();
        this.rightEye.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0.5, 1, 2.2);
        this.scene.scale(0.5, 0.5, 0.5);
        this.eyeMaterial.apply();
        this.leftEye.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
        this.scene.popMatrix();
    }

    update(t){
        this.deltaT = t - this.time;
        this.time = t;
        this.position[0] += (this.speed*0.01*this.scene.speedFactor/this.deltaT)*Math.sin(this.rotation);
        this.position[2] += (this.speed*0.01*this.scene.speedFactor/this.deltaT)*Math.cos(this.rotation); 
        this.leftWing.update(t*(this.speed/4+1)*this.scene.speedFactor);
        this.rightWing.update(-t*(this.speed/4+1)*this.scene.speedFactor);
    }

    turn(v){
        this.rotation += v*Math.PI/16;
    }

    accelerate(v){
        this.speed+=v;
    }

    resetPosition(){
        this.speed = 0;
        this.rotationNumber = 0;
        this.deltaT = 0;
        this.rotation = 0;
        this.position = [0, 0, 0];
    }

}


