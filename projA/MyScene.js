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
        this.gl.clearColor(0.7, 0.7, 0.7, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        
        this.trunkTexture = new CGFtexture(this, 'images/Trunk.png');
        this.treeTopTexture = new CGFtexture(this, 'images/TreeTop.png');
        
        this.trunkMaterial = new CGFappearance(this);
        this.trunkMaterial.setAmbient(1, 1, 1, 1);
        this.trunkMaterial.setDiffuse(1, 1, 1, 1);
        this.trunkMaterial.setSpecular(1, 1, 1, 1);
        this.trunkMaterial.setShininess(10.0);
        this.trunkMaterial.setTexture(this.trunkTexture);
        this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.treeTopMaterial = new CGFappearance(this);
        this.treeTopMaterial.setAmbient(1, 1, 1, 1);
        this.treeTopMaterial.setDiffuse(1, 1, 1, 1);
        this.treeTopMaterial.setSpecular(1, 1, 1, 1);
        this.treeTopMaterial.setShininess(10.0);
        this.treeTopMaterial.setTexture(this.treeTopTexture);
        this.treeTopMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.groundTexture = new CGFtexture(this, 'images/hillTop.png');
        this.groundMaterial = new CGFappearance(this);
        this.groundMaterial.setAmbient(1, 1, 1, 1);
        this.groundMaterial.setDiffuse(1, 1, 1, 1);
        this.groundMaterial.setSpecular(1, 1, 1, 1);
        this.groundMaterial.setShininess(10.0);
        this.groundMaterial.setTexture(this.groundTexture);
        this.groundMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        //Initialize scene objects
        this.treeGroup = new MyTreeGroupPatch(this, this.trunkMaterial, this.treeTopMaterial, -30, -25.0);
        this.treeGroup2 = new MyTreeGroupPatch(this, this.trunkMaterial, this.treeTopMaterial, 10.0, -30.0);

        this.treeRow = new MyTreeRowPatch(this, this.trunkMaterial, this.treeTopMaterial, 10, 10.0);
        this.treeRow2 = new MyTreeRowPatch(this, this.trunkMaterial, this.treeTopMaterial, -5.0, 45.0);

        this.house = new MyHouse(this, 3.0, 3.0, 4.0);
        this.cubemap = new MyCubeMap(this, 150);
        this.ground = new MyGround(this, this.groundMaterial, 150);
        this.voxelHill = new MyVoxelHill(this, 5, this.groundMaterial, 25, 30);
        this.voxelHill2 = new MyVoxelHill(this, 7, this.groundMaterial, -35, 0);
        this.axis = new CGFaxis(this);

        //Objects connected to MyInterface
        this.displayNormals = false;
    }
    initLights() {
        this.setGlobalAmbientLight(0.6, 0.6, 0.6, 1.0);

        this.lights[0].setPosition(0.0,0.5,2.0, 1.0);
        this.lights[0].setDiffuse(1.0, 0.5, 0.0, 1.0);
        this.lights[0].setSpecular(0.0, 0.0, 0.0, 1.0);
        this.lights[0].disable();
        this.lights[0].update();

        this.lights[1].setPosition(2.0, 0.5, 0.0, 1.0);
        this.lights[1].setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.lights[1].setSpecular(1.0, 0.6, 0.1, 1.0);
        this.lights[1].disable();
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(Math.PI/4, 0.1, 500, vec3.fromValues(65, 40, 65), vec3.fromValues(0, 0, 0));
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

        this.axis.display();
        
        this.lights[0].update();
        this.lights[1].update();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        this.house.display();
        this.voxelHill.display();
        this.voxelHill2.display();
        this.treeGroup.display();
        this.treeRow.display();
        this.treeGroup2.display();
        this.treeRow2.display();
        this.ground.display();
        this.cubemap.display();

        // ---- END Primitive drawing section
    }
}