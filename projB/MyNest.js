/**
* MyNest
* @constructor
*/
class MyNest extends CGFobject {
    constructor(scene, x, y, z) {
        super(scene);

        this.position = [x, y, z];

        this.branches = [undefined, undefined, undefined];

        this.outside = new MyHalfSphere(this.scene, 1, 10, 10);
        this.inside = new MyHalfSphere(this.scene, 1, 10, 10, true);
        this.initMaterials();
    }

    initMaterials(){
        
        this.woodTexture = new CGFtexture(this.scene, 'images/nest.png');

        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setTexture(this.woodTexture);
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(this.position[0], this.position[1], this.position[2]);
        this.scene.scale(0.35, 0.35, 0.35);

        this.scene.scale(3, 1.5, 3);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(0, -1, -1);

        this.woodMaterial.apply();
        this.outside.display();
        this.inside.display();

        for(var i = 0; this.branches.length; i++){
            this.scene.pushMatrix();
            this.scene.translate(0.5*i, 0, 0);
            if(this.branches[i] != undefined);
            this.branches[i].display();
            this.scene.popMatrix();
        }
        
        this.scene.popMatrix();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


