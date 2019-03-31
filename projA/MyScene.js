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

        //Initialize scene objects
        this.axis = new CGFaxis(this);  
        this.prism = new MyPrism(this, 50, 1);
        this.cylinder = new MyCylinder(this,50,1);

        //Objects connected to MyInterface
        this.displayNormals = true;
        this.scaleFactor = 2.0;
    }
    initLights() {
        this.setGlobalAmbientLight(0.3, 0.3, 0.3, 1.0);

        this.lights[0].setPosition(0.0,0.5,2.0, 1.0);
        this.lights[0].setDiffuse(1.0, 0.5, 0.0, 1.0);
        this.lights[0].setSpecular(0.0, 0.0, 0.0, 1.0);
        this.lights[0].disable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        this.lights[1].setPosition(2.0, 0.5, 0.0, 1.0);
        this.lights[1].setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.lights[1].setSpecular(1.0, 0.6, 0.1, 1.0);
        this.lights[1].disable();
        this.lights[1].setVisible(true);
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(1.0, 0.5, 0.2, 1.0);
        this.setDiffuse(1.0, 0.5, 0.2, 1.0);
        this.setSpecular(1.0, 0.5, 0.2, 1.0);
        this.setShininess(100.0);
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
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);

        
        this.lights[0].update();
        this.lights[1].update();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        
        if (this.displayNormals){
            this.cylinder.enableNormalViz();
        }else{
            this.cylinder.disableNormalViz();
        }

        this.cylinder.display();

        // ---- END Primitive drawing section
    }
}