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
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        this.skyTextureDay = new CGFtexture(this, 'images/skyboxDay.png');
        this.oldT = 0;
        this.newT = 0;
        this.deltaT = 0;
        
        /*this.groundTexture = new CGFtexture(this, 'images/terrain.jpg');
        this.groundMaterial = new CGFappearance(this);
        this.groundMaterial.setAmbient(0.7, 1, 0.5, 1);
        this.groundMaterial.setDiffuse(0.7, 1, 0.5, 1);
        this.groundMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.groundMaterial.setShininess(10.0);
        this.groundMaterial.setTexture(this.groundTexture);
        this.groundMaterial.setTextureWrap('REPEAT', 'REPEAT');*/

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.house = new MyHouse(this, 3.0, 3.0, 4.0);
        this.cubemap = new MyCubeMap(this, 60, this.skyTextureDay);
        this.bird = new MyBird(this);
        this.terrain = new MyTerrain(this);

        //Objects connected to MyInterface
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

        this.newT = t*0.001;

        this.deltaT = this.newT - this.oldT;  
              
        this.bird.update(this.newT*5);
        
        this.oldT = this.newT;
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
        //this.terrain.display();
        this.bird.display();
       /* this.house.display();
        this.cubemap.display();
        this.pushMatrix();
        this.groundMaterial.apply();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();*/
        // ---- END Primitive drawing section
    }
}