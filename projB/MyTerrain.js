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

       
        this.terrainShader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
       
        this.terrainShader.setUniformsValues({ uSampler2: 1, normScale: 1});
        


    }

    initMaterials(){
        
        this.terrainTexture = new CGFtexture(this.scene, 'images/terrain.jpg');
        this.terrainMap = new CGFtexture(this.scene, 'images/heightmap4.jpg');

    }


    display() {

        this.scene.pushMatrix();
        
        this.scene.scale(60,60,60);
        this.appearance.apply();
        this.terrainMap.bind(1);
        this.scene.setActiveShader(this.terrainShader);
        this.plane.display();

        this.scene.popMatrix();
    }
}
