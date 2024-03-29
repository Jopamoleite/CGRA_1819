/**
* MyTerrain
* @constructor
*/
class MyTerrain extends CGFobject {
    constructor (scene) {
        super(scene);

        this.initMaterials();

        this.plane = new Plane(this.scene, 50);

        this.appearance = new CGFappearance(this.scene);

        this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
		this.appearance.setShininess(120);

        this.appearance.setTexture(this.terrainTexture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');

        //Initialization of shaders
        this.terrainShader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
       
        this.terrainShader.setUniformsValues({ uSampler2: 1, normScale: 0.2, gradient: 2});
        


    }

    //Initialization of the textures 
    initMaterials(){
        
        this.terrainTexture = new CGFtexture(this.scene, 'images/terrain2.jpg');
        this.terrainMap = new CGFtexture(this.scene, 'images/heightmap2.jpg');
    	this.terrainGradient = new CGFtexture(this.scene, 'images/altimetry.png');

    }

    //Displays the terrain
    display() {

        this.scene.pushMatrix();
        this.scene.scale(60,60,60);
        this.scene.rotate(Math.PI/2, -1.0, 0, 0)
        this.appearance.apply();
        //Binds textures
        this.terrainMap.bind(1);
        this.terrainGradient.bind(2);
        //Sets terrain shader as active shader
        this.scene.setActiveShader(this.terrainShader);
        this.plane.display();
        //Sets default shader as active shader
        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.popMatrix();
    }
}
