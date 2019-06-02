/**
* MyBird
* @constructor
*/
class MyBird extends CGFobject {
    constructor (scene) {
        super(scene);

        this.initMaterials();

        //Initilization of variables used for movement
        this.time = 0;
        this.deltaT = 0;
        this.rotation = 0;
        this.speed = 0;
        this.startingPos = [0, 0, 0];
        this.position = [0, 0, 0];
        this.pickingUpTime = 0;
        this.pickingUp = false;


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

        this.branch = undefined;
        this.person = undefined;
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

    //Displays the bird according to the values from update
    display() {
        this.scene.pushMatrix();
        //If the bird isn't trying to pick up a branch, he'll have an oscillating movement
        if(!this.pickingUp)
            this.scene.translate(0, Math.sin(this.time*Math.PI*this.scene.speedFactor), 0);
        this.scene.translate(this.position[0], this.position[1], this.position[2]);
        this.scene.rotate(this.rotation, 0, 1, 0);
        
        //If the bird is trying to pickup a branch he'll be under a rotation (different for going up and down)
        if(this.pickingUp){
            //If pickingUpTime >= 2, the bird is going up, so it is rotated to make him tilt up
            //Else, the bird is going down, so it is rotated to make him tilt down
            if(this.pickingUpTime >= 2){
                this.scene.rotate(-Math.PI/8, 1, 0, 0);
            }else{
                this.scene.rotate(Math.PI/4, 1, 0, 0);
            }
        }

        this.scene.pushMatrix();
        //The bird is scaled according to a GUI slider variable called scaleFactor
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

        //If the bird is carrying a branch it is drawn on its beak
        if(this.branch != undefined){
            this.scene.pushMatrix();
            this.scene.translate(-1, 0.5, 3.3);
            this.scene.rotate(Math.PI/2, 0, 1, 0);
            this.branch.display();
            this.scene.popMatrix();
        }
        
        //If the bird is carrying the person it is drawn on its back
        if(this.person != undefined){
            this.scene.pushMatrix();
            this.scene.translate(0, 3, 0.25);
            this.scene.rotate(Math.PI/2, 1, 0, 0);
            this.person.display();
            this.scene.popMatrix();
        }

        this.scene.popMatrix();
        this.scene.popMatrix();
    }

    //Bird's update method, called every time the scene's update method is called
    update(t){
        this.deltaT = t;
        //If the bird isn't trying to pick up a branch the time is incremented by deltaT seconds
        //Else we update the birds Y position by -0.15 if the bird is going down, and by +0.15 if it's going up
        //0.15 calculated by dividing the distance travelled (3 units) by 20 (number of updates in a second, assuming setUpdatePeriod is 50)
        //Since the update time might vary slightly and not always be 50, the bird could end up going up or down more than if should so we reset it's Y position ahead
        if(!this.pickingUp){
            this.time += this.deltaT;
        }else{
            if(this.pickingUpTime >= 2){
                this.position[1] += 0.15;                
            }else{
                this.position[1] -= 0.15;                
            }
        }

        //Calculating distance using speed and time elapsed (deltaT), for both X and Z, depending on the bird's current rotation
        this.position[0] += (this.speed*this.scene.speedFactor*this.deltaT)*Math.sin(this.rotation);
        this.position[2] += (this.speed*this.scene.speedFactor*this.deltaT)*Math.cos(this.rotation);

        //If pickingUpTime is >= 4, that means the bird has completed its 2 second travel, and we reset his Y position as mentioned above, set pickingUp to false and reset pickingUpTime
        if(this.pickingUpTime >= 4){
            this.position[1] = this.startingPos[1];
            this.pickingUp = false;    
            this.pickingUpTime = 0;        
        }
        
        //If pickingUpTime >= 2 the bird is going up, so we re-enable the wing's flapping movement
        if(this.pickingUpTime >= 2){
            //If speed is less or equal to 1, we simply use the time * speedFactor
            //Else, we had speed/4, so as to make the wings flap faster, but not too fast
            if(this.speed <= 1){
                this.leftWing.update((this.time+this.pickingUpTime)*this.scene.speedFactor);
                this.rightWing.update(-(this.time+this.pickingUpTime)*this.scene.speedFactor);
            }else{
                this.leftWing.update((this.time+this.pickingUpTime)*(this.speed/4 + 1)*this.scene.speedFactor);
                this.rightWing.update(-(this.time+this.pickingUpTime)*(this.speed/4 + 1)*this.scene.speedFactor);
            }
        }

        //If the bird is not picking up branches we have its wings do a flapping movement
        //This is turned off when the birds is going down to pick up a branch, but turned on again when it starts to go up
        if(!this.pickingUp){
            if(this.speed <= 1){
                this.leftWing.update(-this.time*this.scene.speedFactor/2);
                this.rightWing.update(this.time*this.scene.speedFactor/2);
            }else{
                this.leftWing.update(this.time*(this.speed/4 + 1)*this.scene.speedFactor/2);
                this.rightWing.update(-this.time*(this.speed/4 + 1)*this.scene.speedFactor/2);
            }
        }
        //If the bird is picking up a branch, instead of incrementing this.time, we increment this.pickingUpTime, to have a timer that continues to increment during the bird's ascencion
        //And we can still preserve the time when the bird started going down, so we can return to the altitude we started going down at
        if(this.pickingUp){
            this.pickingUpTime+=this.deltaT;
        }
    }

    //Method that sets pickingUp to true, called by the scene's update when P is pressed
    pickUp(v){
        this.pickingUp = v;
    }

    //Method that adds a fixed rotational value to the current birds rotation
    //It receives either 1 or -1, so it only increments or decrements the rotation ou minimal value
    //Scales with speedFactor
    //Called by the scene's update by pressing either A or D
    turn(v){
        this.rotation += v*Math.PI/(16/this.scene.speedFactor);
    }

    //Method that adds either 1 or -1 to the current speed
    //Called by scene's update by pressing either W or S
    accelerate(v){
        this.speed+=v;
    }

    //Resets position, rotation and speed values
    //Called by the scene's update by pressing R
    resetPosition(){
        this.speed = 0;
        this.deltaT = 0;
        this.rotation = 0;
        this.position[0] = this.startingPos[0];
        this.position[1] = this.startingPos[1];
        this.position[2] = this.startingPos[2];
    }

}


