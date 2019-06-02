/**
* MyNest
* @constructor
*/
class MyNest extends CGFobject {
    constructor(scene, x, y, z) {
        super(scene);

        this.position = [x, y, z];

        this.branches = [];

        this.initMaterials();

        this.outside = new MyHalfSphere(this.scene, 1, 10, 10);
        this.inside = new MyHalfSphere(this.scene, 1, 10, 10, true);
        this.egg1 = new MyBrokenEgg(this.scene);
        this.brokenPart = new MyBrokenEgg(this.scene);
        this.egg2 = new MyEgg(this.scene);
        this.egg3 = new MyEgg(this.scene);
        this.babyBird = new MyBabyBird(this.scene);
    }

    initMaterials(){
        
        this.woodTexture = new CGFtexture(this.scene, 'images/nest.png');

        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(0.6, 0.4, 0.4, 1.0);
        this.woodMaterial.setDiffuse(0.6, 0.4, 0.4, 1.0);
        this.woodMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.woodMaterial.setShininess(10.0);
        this.woodMaterial.setTexture(this.woodTexture);
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(this.position[0], this.position[1], this.position[2]);
        this.scene.scale(0.35, 0.35, 0.35);
        for(var i = 0; i < this.branches.length; i++){
            if(this.branches[i] != undefined){
                this.scene.pushMatrix();
                this.scene.rotate(-Math.PI/7, 1, 0, 0);
                this.scene.translate(-0.2, 0, 0);
                this.scene.translate(0.6*(i-1) + i*0.1, -1.5 + i*0.25, 0.1);
                this.scene.rotate(i*-Math.PI/4, 0, 0, 1);
                this.branches[i].display();
                this.scene.popMatrix();
                
            }
        }

        this.scene.pushMatrix();
        this.scene.translate(0, -0.75, -1);
        this.scene.rotate(-Math.PI/4, 1, 0, 0);
        this.babyBird.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, -0.5);
        this.scene.rotate(3*Math.PI/2, 1, 0, 0);
        this.brokenPart.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -2);
        this.scene.rotate(-Math.PI/4, 1, 0, 0);
        this.egg1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.5, 0, -1);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.rotate(-Math.PI/4, 1, 0, 0);
        this.egg2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.5, 0, -1);
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.scene.rotate(-Math.PI/4, 1, 0, 0);
        this.egg3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(3, 1.5, 3);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.woodMaterial.apply();
        this.outside.display();
        this.inside.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


