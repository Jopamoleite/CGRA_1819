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

        //Objects connected to MyInterface
        this.enableTex = true;
        this.mode = 'Day';

        //Background color
        this.gl.clearColor(0.7, 0.7, 0.7, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(this.enableTex);

        
        this.trunkTexture = new CGFtexture(this, 'images/Trunk.png');
        this.treeTopTexture = new CGFtexture(this, 'images/TreeTop.png');
        this.skyTextureDay = new CGFtexture(this, 'images/skyboxDay.png');
        this.skyTextureNight = new CGFtexture(this, 'images/skyboxNight.png');
        
        this.trunkMaterial = new CGFappearance(this);
        this.trunkMaterial.setAmbient(0.8, 0.4, 0.1, 1.0);
        this.trunkMaterial.setDiffuse(0.8, 0.4, 0.1, 1.0);
        this.trunkMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.trunkMaterial.setShininess(10.0);
        this.trunkMaterial.setTexture(this.trunkTexture);
        this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.treeTopMaterial = new CGFappearance(this);
        this.treeTopMaterial.setAmbient(1.0, 0.86, 0.64, 1.0);
        this.treeTopMaterial.setDiffuse(1.0, 0.86, 0.64, 1.0);
        this.treeTopMaterial.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.treeTopMaterial.setShininess(10.0);
        this.treeTopMaterial.setTexture(this.treeTopTexture);
        this.treeTopMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.groundTexture = new CGFtexture(this, 'images/hillTop.png');
        this.groundMaterial = new CGFappearance(this);
        this.groundMaterial.setAmbient(0.7, 1, 0.5, 1);
        this.groundMaterial.setDiffuse(0.7, 1, 0.5, 1);
        this.groundMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.groundMaterial.setShininess(10.0);
        this.groundMaterial.setTexture(this.groundTexture);
        this.groundMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        //Initialize scene objects
        this.treeGroup = new MyTreeGroupPatch(this, this.trunkMaterial, this.treeTopMaterial, -30.0, -25.0);
        this.treeGroup2 = new MyTreeGroupPatch(this, this.trunkMaterial, this.treeTopMaterial, 10.0, -30.0);
        this.treeGroup3 = new MyTreeGroupPatch(this, this.trunkMaterial, this.treeTopMaterial, -10.0, -35.0);
        this.treeGroup4 = new MyTreeGroupPatch(this, this.trunkMaterial, this.treeTopMaterial, 8.0, -50.0);

        this.treeRow = new MyTreeRowPatch(this, this.trunkMaterial, this.treeTopMaterial, 5.0, 15.0);
        this.treeRow2 = new MyTreeRowPatch(this, this.trunkMaterial, this.treeTopMaterial, -5.0, 43.0);
        this.treeRow3 = new MyTreeRowPatch(this, this.trunkMaterial, this.treeTopMaterial, -20.0, 23.0);
        this.treeRow4 = new MyTreeRowPatch(this, this.trunkMaterial, this.treeTopMaterial, -5.0, 51.0);
        this.treeRow5 = new MyTreeRowPatch(this, this.trunkMaterial, this.treeTopMaterial, -5.0, 58.0);

        this.treeRow6 = new MyTreeRowPatch(this, this.trunkMaterial, this.treeTopMaterial, 25.0, -50.0);
        this.treeRow7 = new MyTreeRowPatch(this, this.trunkMaterial, this.treeTopMaterial, 20.0, -57.0);
        
        this.bigTree = new MyBigTree(this, this.trunkMaterial, this.treeTopMaterial, -40, -40);

        this.bench = new MyBench(this, 47, -40);
        this.bench2 = new MyBench(this, -31, -39, -Math.PI/2);

        this.house = new MyHouse(this, 3.0, 3.0, 4.0);
        this.cubemap = new MyCubeMap(this, 125, this.skyTextureDay);
        this.ground = new MyGround(this, this.groundMaterial, 125);
        this.campfire = new MyCampfire(this, 40, -40);
        this.voxelHill = new MyVoxelHill(this, 10, this.groundMaterial, 25, 30);
        this.voxelHill2 = new MyVoxelHill(this, 7, this.groundMaterial, -35, 0);
        this.voxelHill3 = new MyVoxelHill(this, 7, this.groundMaterial, -50, 50);
        this.voxelHill4 = new MyVoxelHill(this, 5, this.groundMaterial, -47, 40);
        this.voxelHill5 = new MyVoxelHill(this, 5, this.groundMaterial, -40, 47);
        this.voxelHill6 = new MyVoxelHill(this, 3, this.groundMaterial, -41, 41);
    }
    initLights() {
        this.setGlobalAmbientLight(0.0, 0.0, 0.0, 1.0);
        
        //SUN
        this.lights[0].setPosition(0.0, 50 ,0.0, 1.0);
        this.lights[0].setDiffuse(1.0, 0.9, 0.45, 1.0);
        this.lights[0].setAmbient(1.0, 0.9, 0.45, 1.0);
        this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setConstantAttenuation(1);
        this.lights[0].setLinearAttenuation(0);
        this.lights[0].setQuadraticAttenuation(0);
        this.lights[0].disable();
        this.lights[0].update();
            
        //MOON
        this.lights[1].setPosition(0.0, 50, 0.0, 1.0);
        this.lights[1].setDiffuse(0.22, 0.33, 1.0, 1.0);
        this.lights[1].setAmbient(0.22, 0.33, 1.0, 1.0);
        this.lights[1].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[1].setConstantAttenuation(0);
        this.lights[1].setLinearAttenuation(0.01);
        this.lights[1].setQuadraticAttenuation(0);
        this.lights[1].disable();
        this.lights[1].update();

        //CAMPFIRE
        this.lights[2].setPosition(40, 0, -40, 1.0);
        this.lights[2].setDiffuse(1, 0.58, 0.16, 1.0);
        this.lights[2].setAmbient(1, 0.58, 0.16, 1.0);
        this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[2].setConstantAttenuation(0);
        this.lights[2].setLinearAttenuation(0);
        this.lights[2].setQuadraticAttenuation(0.01);
        this.lights[2].disable();
        this.lights[2].update();
    }
    initCameras() {
        this.camera = new CGFcamera(Math.PI/4, 0.1, 500, vec3.fromValues(50, 40, 50), vec3.fromValues(0, 0, 0));
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

        
        if(this.mode == 'Day'){
            //DAY MODE
            this.lights[0].enable();
            this.lights[0].update();
            this.lights[1].disable();
            this.lights[1].update();
            this.lights[2].disable();
            this.lights[2].update();
            this.cubemap.updateTexture(this.skyTextureDay);
        }
        else{
            //NIGHT MODE
            this.lights[0].disable();
            this.lights[0].update();
            this.lights[1].enable();
            this.lights[1].update();
            this.lights[2].enable();
            this.lights[2].update();
            this.cubemap.updateTexture(this.skyTextureNight);
        }


        this.enableTextures(this.enableTex);

        // ---- BEGIN Primitive drawing section

        this.house.display();
        this.voxelHill.display();
        this.voxelHill2.display();
        this.voxelHill3.display();
        this.voxelHill4.display();
        this.voxelHill5.display();
        this.voxelHill6.display();
        this.treeGroup.display();
        this.treeGroup2.display();
        this.treeGroup3.display();
        this.treeGroup4.display();
        this.treeRow.display();
        this.treeRow2.display();
        this.treeRow3.display();
        this.treeRow4.display();
        this.treeRow5.display();
        this.treeRow6.display();
        this.treeRow7.display();
        this.ground.display();
        this.cubemap.display();
        this.campfire.display();
        this.bigTree.display();
        this.bench.display();
        this.bench2.display();

        // ---- END Primitive drawing section
    }
}