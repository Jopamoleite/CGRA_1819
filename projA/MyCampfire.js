/**
* MyCampfire
* @constructor
*/
class MyCampfire extends CGFobject {
    constructor (scene, startingX, startingZ) {
        super(scene);
        this.initMaterials();
        this.startingX = startingX;
        this.startingZ = startingZ;

        this.fire =  new MyCone(this.scene, 10, 1);
        this.rock = new MyPyramid(this.scene, 5, 1);
        this.wood = new MyUnitCube(this.scene);
    }

    initMaterials(){
        
        this.woodTexture = new CGFtexture(this.scene, 'images/Trunk2.png');
        this.rockTexture = new CGFtexture(this.scene, 'images/rock.png');
        this.wallDoorTexture = new CGFtexture(this.scene, 'images/wallWithDoor.png');
        this.wallWindowTexture = new CGFtexture(this.scene, 'images/wallWithWindow.png');
        this.fireTexture = new CGFtexture(this.scene, 'images/campfire.png');

        this.woodMaterial = new CGFappearance(this.scene);
        this.woodMaterial.setAmbient(0.65, 0.38, 0.33, 1);
        this.woodMaterial.setDiffuse(0.65, 0.38, 0.33, 1);
        this.woodMaterial.setSpecular(0.2, 0.2, 0.2, 1);
        this.woodMaterial.setShininess(10.0);
        this.woodMaterial.setTexture(this.woodTexture);
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.rockMaterial = new CGFappearance(this.scene);
        this.rockMaterial.setAmbient(0.7, 0.7, 0.7, 1);
        this.rockMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
        this.rockMaterial.setSpecular(0.2, 0.2, 0.2, 1);
        this.rockMaterial.setShininess(10.0);
        this.rockMaterial.setTexture(this.rockTexture);
        this.rockMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.fireMaterial = new CGFappearance(this.scene);
        this.fireMaterial.setAmbient(0.8, 0.8, 0.8, 1);
        this.fireMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.fireMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.fireMaterial.setShininess(10.0);
        this.fireMaterial.setTexture(this.fireTexture);
        this.fireMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }


    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.startingX, 0, this.startingZ);

        this.scene.pushMatrix();
        this.fireMaterial.apply();
        this.scene.scale(2,3,2);
        this.fire.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.rockMaterial.apply();
        this.scene.translate(1.5,0,1.5);
        this.rock.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.rockMaterial.apply();
        this.scene.translate(-1.5,0,1.5);
        this.rock.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.rockMaterial.apply();
        this.scene.translate(-1.5,0,-1.5);
        this.rock.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.rockMaterial.apply();
        this.scene.translate(1.5,0,-1.5);
        this.rock.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.rockMaterial.apply();
        this.scene.translate(2.0,0,0);
        this.rock.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.rockMaterial.apply();
        this.scene.translate(-2.0,0,0);
        this.rock.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.rockMaterial.apply();
        this.scene.translate(0,0,2.0);
        this.rock.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.rockMaterial.apply();
        this.scene.translate(0,0,-2.0);
        this.rock.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.woodMaterial.apply();
        this.scene.translate(0.3, 1.5, -0.5);
        this.scene.translate(-0.5, 0, -0.5);
        this.scene.rotate(Math.PI/3, 0, 1, 0);
        this.scene.rotate(Math.PI/6, 0, 0, 1);
        this.scene.translate(0.5, 0.5, 0.5);
        this.scene.scale(0.5,5,0.5);
        this.wood.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.woodMaterial.apply();
        this.scene.translate(-0.5, 2.0, 2.0);
        this.scene.translate(-0.5, 0, -0.5);
        this.scene.rotate(Math.PI/3, 0, 1, 0);
        this.scene.rotate(-Math.PI/9, 0, 0, 1);
        this.scene.translate(0.5, 0.5, 0.5);
        this.scene.scale(0.5,5,0.5);
        this.wood.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.woodMaterial.apply();
        this.scene.translate(-1.0, 2.0, -0.5);
        this.scene.translate(-0.5, 0, -0.5);
        this.scene.rotate(-Math.PI/8, 0, 1, 0);
        this.scene.rotate(-Math.PI/6, 0, 0, 1);
        this.scene.translate(0.5, 0.5, 0.5);
        this.scene.scale(0.5,5,0.5);
        this.wood.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.woodMaterial.apply();
        this.scene.translate(1.5, 1.5, 0.5);
        this.scene.translate(-0.5, 0, -0.5);
        this.scene.rotate(-Math.PI/8, 0, 1, 0);
        this.scene.rotate(Math.PI/6, 0, 0, 1);
        this.scene.translate(0.5, 0.5, 0.5);
        this.scene.scale(0.5,5,0.5);
        this.wood.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}


