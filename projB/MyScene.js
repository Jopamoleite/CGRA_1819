/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.1, 0.1, 0.1, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        this.skyTextureDay = new CGFtexture(this, 'images/skyboxDay.png');


        //Initialize times
        this.newTime = 0;
        this.oldTime = 0;
        this.deltaT = 0;
        this.startAnimationTime = 0;

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.branch = new MyTreeBranch(this, 0, 4.25, 5);
        this.branch2 = new MyTreeBranch(this, 5, 4.25, 0);
        this.branch3 = new MyTreeBranch(this, -2, 4.25, -10);
        this.branch4 = new MyTreeBranch(this, 15, 4.25, 6);
        this.nest = new MyNest(this, 10, 5.25, -8);
        this.plane = new Plane(this, 32);
        this.house = new MyHouse(this, 2.0, 2.5, 3.0);
        this.cubemap = new MyCubeMap(this, 60, this.skyTextureDay);
        this.terrain = new MyTerrain(this);
        this.lightning = new MyLightning(this);
        this.tree1 = new MyLSPlant(this);
        this.tree2 = new MyLSPlant(this);
        this.tree3 = new MyLSPlant(this);
        this.tree4 = new MyLSPlant(this);
        this.tree5 = new MyLSPlant(this);

        this.bird = new MyBird(this);
        this.bird.startingPos = [10, 7.75, -8];
        this.bird.position = [10, 7.75, -8];

        //Random branch rotation initialization
        this.branchRotationsNumbers = [Math.floor(Math.random() * 12), Math.floor(Math.random() * 12), Math.floor(Math.random() * 12), Math.floor(Math.random() * 12)];
        this.branches = [this.branch, this.branch2, this.branch3, this.branch4];

        //Objects connected to MyInterface
        this.scaleFactor = 1;
        this.speedFactor = 1;

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setAmbient(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    update(t){
        this.newTime = t*0.001;
        this.deltaT = this.newTime - this.oldTime;
        this.checkKeys();
        this.bird.update(this.deltaT*2);
        this.lightning.update(this.newTime);
        this.oldTime = this.newTime;

        for(var i = 0; i < this.branches.length; i++){
            if(this.branches[i] == undefined){
                continue;
            }
            if(this.bird.branch == undefined){
                var beakRadius = 1.5;
                if(this.scaleFactor>=1){
                    beakRadius*=this.scaleFactor;
                }
                if(Math.pow(this.branches[i].position[0] - this.bird.position[0], 2) + Math.pow(this.branches[i].position[1] - this.bird.position[1], 2) + Math.pow(this.branches[i].position[2] - this.bird.position[2], 2) <= beakRadius){
                    this.bird.branch = this.branches[i];
                    this.branches[i] = undefined;
                }  
            }
        }
        if(this.bird.branch != undefined){
            var nestRadius = 1.5;
            if(this.scaleFactor >= 1){
                nestRadius *= this.scaleFactor;
            }
            if(Math.pow(this.bird.position[0] - this.nest.position[0], 2) + Math.pow(this.bird.position[1] - this.nest.position[1], 2) + Math.pow(this.bird.position[2] - this.nest.position[2], 2) <= nestRadius){
                this.nest.branches.push(this.bird.branch);
                this.bird.branch = undefined;    
            }
        }

    }
    checkKeys() {
        if (this.gui.isKeyPressed("KeyW")) {
            if(this.bird.speed <=5)
                this.bird.accelerate(1);
        }
        if (this.gui.isKeyPressed("KeyS")) {
            if(this.bird.speed > 0)
                this.bird.accelerate(-1);
        }
        if (this.gui.isKeyPressed("KeyA")) {
            this.bird.turn(1);
        }
        if (this.gui.isKeyPressed("KeyD")) {
            this.bird.turn(-1);
        }
        if (this.gui.isKeyPressed("KeyR")) {
            this.bird.resetPosition();
        }
        if (this.gui.isKeyPressed("KeyL")) {
            if(this.newTime - this.startAnimationTime >= 1){
                this.startAnimationTime = this.newTime;
                this.lightning = new MyLightning(this);
                this.lightning.startAnimation(this.startAnimationTime);
            }
        }
        if (this.gui.isKeyPressed("KeyP")) {
            this.bird.pickUp(true);
        }
    }
        

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
       
        
        this.terrain.display();

        this.lightning.display();

        this.nest.display();
        
        if(this.branches[0]!=undefined){
            this.pushMatrix();
            this.translate(this.branches[0].position[0], this.branches[0].position[1], this.branches[0].position[2]);
            this.scale(0.35, 0.35, 0.35);
            this.rotate(Math.PI/6*this.branchRotationsNumbers[0], 0, 1, 0);
            this.branches[0].display();
            this.popMatrix();
        }
        
        if(this.branches[1]!=undefined){
            this.pushMatrix();
            this.translate(this.branches[1].position[0], this.branches[1].position[1], this.branches[1].position[2]);
            this.scale(0.35, 0.35, 0.35);
            this.rotate(Math.PI/6*this.branchRotationsNumbers[1], 0, 1, 0);
            this.branches[1].display();
            this.popMatrix();
        }
        
        if(this.branches[2]!=undefined){
            this.pushMatrix();
            this.translate(this.branches[2].position[0], this.branches[2].position[1], this.branches[2].position[2]);
            this.scale(0.35, 0.35, 0.35);
            this.rotate(Math.PI/6*this.branchRotationsNumbers[2], 0, 1, 0);
            this.branches[2].display();
            this.popMatrix();
        }
        
        if(this.branches[3]!=undefined){
            this.pushMatrix();
            this.translate(this.branches[3].position[0], this.branches[3].position[1], this.branches[3].position[2]);
            this.scale(0.35, 0.35, 0.35);
            this.rotate(Math.PI/6*this.branchRotationsNumbers[3], 0, 1, 0);
            this.branches[3].display();
            this.popMatrix();
        }
       
        this.bird.display();
       
        this.pushMatrix();
        this.translate(0, 4.25, 0);
        this.tree1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(10, 4.25, 10);
        this.tree2.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-10, 4.25, -6);
        this.tree3.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0, 4.25, -15);
        this.tree4.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(14, 4.25, -6);
        this.tree5.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-4, 4.25, -4);
        this.house.display();
        this.popMatrix();

        this.cubemap.display();
        // ---- END Primitive drawing section
    }
}