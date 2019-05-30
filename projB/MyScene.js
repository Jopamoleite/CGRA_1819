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
        
        /*this.groundTexture = new CGFtexture(this, 'images/terrain.jpg');
        this.groundMaterial = new CGFappearance(this);
        this.groundMaterial.setAmbient(0.7, 1, 0.5, 1);
        this.groundMaterial.setDiffuse(0.7, 1, 0.5, 1);
        this.groundMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.groundMaterial.setShininess(10.0);
        this.groundMaterial.setTexture(this.groundTexture);
        this.groundMaterial.setTextureWrap('REPEAT', 'REPEAT');*/

        //Initialize times
        this.newTime = 0;
        this.oldTime = 0;
        this.deltaT = 0;

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.branch = new MyTreeBranch(this);
        this.branch2 = new MyTreeBranch(this);
        this.branch3 = new MyTreeBranch(this);
        this.branch4 = new MyTreeBranch(this);
        this.nest = new MyNest(this);
        this.plane = new Plane(this, 32);
        this.house = new MyHouse(this, 2.0, 2.5, 3.0);
        this.cubemap = new MyCubeMap(this, 60, this.skyTextureDay);
        this.bird = new MyBird(this);
        this.terrain = new MyTerrain(this);
        this.lightning = new MyLightning(this);

        //Random branch rotation initialization
        this.branchRotationsNumbers = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)];
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
        this.oldTime = this.newTime;
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
        

        this.lightning.display();
        this.terrain.display();

        this.pushMatrix();
        this.translate(10, 4.25, -7);
        this.scale(0.35, 0.35, 0.35);
        this.nest.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(0, 4.25, 5);
        this.scale(0.35, 0.35, 0.35);
        this.rotate(Math.PI/6*this.branchRotationsNumbers[0], 0, 1, 0);
        this.branches[0].display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(5, 4.25, 0);
        this.scale(0.35, 0.35, 0.35);
        this.rotate(Math.PI/6*this.branchRotationsNumbers[1], 0, 1, 0);
        this.branches[1].display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(-2, 4.25, -10);
        this.scale(0.35, 0.35, 0.35);
        this.rotate(Math.PI/6*this.branchRotationsNumbers[2], 0, 1, 0);
        this.branches[2].display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(15, 4.25, 6);
        this.scale(0.35, 0.35, 0.35);
        this.rotate(Math.PI/6*this.branchRotationsNumbers[3], 0, 1, 0);
        this.branches[3].display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(10, 7.25, -8);
        this.bird.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(-4, 4.25, -4);
        this.house.display();
        this.popMatrix();

        this.cubemap.display();
        // ---- END Primitive drawing section
    }
}