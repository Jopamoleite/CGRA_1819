/**
* MyBench
* @constructor
*/
class MyBench extends CGFobject {
    constructor (scene, startingX, startingZ, rotate) {
        super(scene);

        this.startingX = startingX;
        this.startingZ = startingZ;

        if(rotate != undefined){
            this.rotate = rotate;
        }else{
            this.rotate = 0;
        }

        this.bench = new MyUnitCube(this.scene);
        this.back = new MyUnitCube(this.scene);
        this.woodTexture = new CGFtexture(this.scene, 'images/Trunk2.png');

        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(0.65, 0.38, 0.33, 1);
        this.woodMaterial.setDiffuse(0.65, 0.38, 0.33, 1);
        this.woodMaterial.setSpecular(0.2, 0.2, 0.2, 1);
        this.woodMaterial.setShininess(10.0);
        this.woodMaterial.setTexture(this.woodTexture);
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
    }


    display() {
        this.woodMaterial.apply();

        this.scene.pushMatrix();

        this.scene.translate(0.5, 0.5, 0.5);
        this.scene.rotate(this.rotate, 0, 1, 0);
        this.scene.translate(-0.5, 0.0, -0.5);
        this.scene.translate(this.startingX, 0, this.startingZ);
        this.scene.scale(3, 2, 10);
        this.bench.display();

        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        
        this.scene.translate(0.5, 0.5, 0.5);
        this.scene.rotate(this.rotate, 0, 1, 0);
        this.scene.translate(-0.5, -0.5, -0.5);
        this.scene.translate(this.startingX+1, 2, this.startingZ);
        this.scene.scale(1, 2, 10);
        this.back.display();

        this.scene.popMatrix();

    }
}


