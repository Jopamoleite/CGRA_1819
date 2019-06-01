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
        this.startingPos = [0, 0, 0];
        this.position = [0, 0, 0];
        this.pickingUpTime = 0;
        this.pickingUp = false;


        this.body = new MyCylinder(this.scene, 6);
        this.neck = new MyCone(this.scene, 6);
        this.tail = new MyCone(this.scene, 6);
        this.beak = new MyPyramid(this.scene, 4);     
        this.head = new MySphere(this.scene, 1, 10, 10, this.faceFrontMaterial, this.faceBackMaterial);
        this.rightWing = new MyRightWing(this.scene, this.faceBackMaterial, this.faceFrontMaterial);
        this.leftWing = new MyLeftWing(this.scene, this.faceBackMaterial, this.faceFrontMaterial);
        this.rightEye = new MySphere(this.scene, 1, 8, 5);
        this.leftEye = new MySphere(this.scene, 1, 8, 5);

        this.branch = undefined;
    }

    initMaterials(){
        
        this.featherTexture = new CGFtexture(this.scene, 'images/mix.png');
        this.eyeTexture = new CGFtexture(this.scene, 'images/eye.png');
        this.beakTexture = new CGFtexture(this.scene, 'images/beak.png');
        this.faceFrontTexture = new CGFtexture(this.scene, 'images/faceFront.png');
        this.faceBackTexture = new CGFtexture(this.scene, 'images/faceBack.png');

        this.featherMaterial = new CGFappearance(this.scene);
        this.featherMaterial.setTexture(this.featherTexture);
        this.featherMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.eyeMaterial = new CGFappearance(this.scene);
        this.eyeMaterial.setTexture(this.eyeTexture);
        this.eyeMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.beakMaterial = new CGFappearance(this.scene);
        this.beakMaterial.setTexture(this.beakTexture);
        this.beakMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.faceFrontMaterial = new CGFappearance(this.scene);
        this.faceFrontMaterial.setTexture(this.faceFrontTexture);
        this.faceFrontMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.faceBackMaterial = new CGFappearance(this.scene);
        this.faceBackMaterial.setTexture(this.faceBackTexture);
        this.faceBackMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }


    display() {
        this.scene.pushMatrix();
        if(!this.pickingUp)
            this.scene.translate(0, Math.sin(this.time*Math.PI*this.scene.speedFactor), 0);
        this.scene.translate(this.position[0], this.position[1], this.position[2]);
        this.scene.rotate(this.rotation, 0, 1, 0);
        
        if(this.pickingUp){
            if(this.pickingUpTime >= 2){
                this.scene.rotate(-Math.PI/8, 1, 0, 0);
            }else{
                this.scene.rotate(Math.PI/4, 1, 0, 0);
            }
        }

        this.scene.pushMatrix();
        this.scene.scale(0.35*this.scene.scaleFactor, 0.35*this.scene.scaleFactor, 0.35*this.scene.scaleFactor);
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.25);
        this.leftWing.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.25);
        this.scene.scale(1, 1, 1);
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

        if(this.branch != undefined){
            this.scene.pushMatrix();
            this.scene.translate(-1, 0.5, 3.3);
            this.scene.rotate(Math.PI/2, 0, 1, 0);
            this.branch.display();
            this.scene.popMatrix();
        }

        this.scene.popMatrix();
        this.scene.popMatrix();
    }

    update(t){
        this.deltaT = t;
        if(!this.pickingUp){
            this.time += this.deltaT;
        }else{
            if(this.pickingUpTime >= 2){
                this.position[1] += 0.15;                
            }else{
                this.position[1] -= 0.15;                
            }
        }
        this.position[0] += (this.speed*this.scene.speedFactor*this.deltaT)*Math.sin(this.rotation);
        this.position[2] += (this.speed*this.scene.speedFactor*this.deltaT)*Math.cos(this.rotation); 
        if(this.pickingUpTime >= 4){
            this.position[1] = this.startingPos[1];
            this.pickingUp = false;    
            this.pickingUpTime = 0;        
        }
        
        if(this.pickingUpTime >= 2){
            if(this.speed <= 1){
                this.leftWing.update((this.time+this.pickingUpTime)*this.scene.speedFactor);
                this.rightWing.update(-(this.time+this.pickingUpTime)*this.scene.speedFactor);
            }else{
                this.leftWing.update((this.time+this.pickingUpTime)*(this.speed/4 + 1)*this.scene.speedFactor);
                this.rightWing.update(-(this.time+this.pickingUpTime)*(this.speed/4 + 1)*this.scene.speedFactor);
            }
        }

        if(!this.pickingUp){
            if(this.speed <= 1){
                this.leftWing.update(-this.time*this.scene.speedFactor/2);
                this.rightWing.update(this.time*this.scene.speedFactor/2);
            }else{
                this.leftWing.update(this.time*(this.speed/4 + 1)*this.scene.speedFactor/2);
                this.rightWing.update(-this.time*(this.speed/4 + 1)*this.scene.speedFactor/2);
            }
        }
        if(this.pickingUp){
            this.pickingUpTime+=this.deltaT;
        }
    }

    pickUp(v){
        this.pickingUp = v;
    }

    turn(v){
        this.rotation += v*Math.PI/(16/this.scene.speedFactor);
    }

    accelerate(v){
        this.speed+=v;
    }

    resetPosition(){
        this.speed = 0;
        this.rotationNumber = 0;
        this.deltaT = 0;
        this.rotation = 0;
        this.position[0] = this.startingPos[0];
        this.position[1] = this.startingPos[1];
        this.position[2] = this.startingPos[2];
    }

}


