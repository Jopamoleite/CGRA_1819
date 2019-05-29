/**
* MyNest
* @constructor
*/
class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);

        this.outside = new MyHalfSphere(this.scene, 1, 10, 10);
        this.inside = new MyHalfSphere(this.scene, 1, 10, 10, true);
        this.initMaterials();
    }

    initMaterials(){
        
        this.woodTexture = new CGFtexture(this.scene, 'images/Trunk2.png');

        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setTexture(this.woodTexture);
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){
        this.scene.pushMatrix();

        this.scene.scale(3, 1, 3);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(0, -1, 0);

        this.woodMaterial.apply();
        this.outside.display();
        this.inside.display();
        
        this.scene.popMatrix();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


