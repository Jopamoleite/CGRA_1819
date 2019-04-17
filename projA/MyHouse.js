/**
* MyTree
* @constructor
*/
class MyHouse extends CGFobject {
    constructor (scene, wallSide, roofHeight, roofSide) {
        super(scene);
        this.wallSide = wallSide;
        this.roofHeight = roofHeight;
        this.roofSide = roofSide;

        this.initMaterials();

        this.walls = new MyUnitCubeQuad(this.scene, this.wallDoorMaterial, this.wallWindowMaterial, this.wallMaterial, this.wallWindowMaterial, this.wallMaterial, this.wallMaterial);
        this.roof = new MyPyramid(this.scene, 4, 1);
        this.column = new MyPrism(this.scene, 10, 1);
        
    }

    initMaterials(){
        
        this.roofTexture = new CGFtexture(this.scene, 'images/bricks.png');
        this.wallTexture = new CGFtexture(this.scene, 'images/stone.png');
        this.wallDoorTexture = new CGFtexture(this.scene, 'images/wallWithDoor.png');
        this.wallWindowTexture = new CGFtexture(this.scene, 'images/wallWithWindow.png');
        this.pillarTexture = new CGFtexture(this.scene, 'images/pillar.png');

        this.roofMaterial = new CGFappearance(this.scene);
        this.roofMaterial.setAmbient(0.65, 0.38, 0.33, 1);
        this.roofMaterial.setDiffuse(0.65, 0.38, 0.33, 1);
        this.roofMaterial.setSpecular(0.2, 0.2, 0.2, 1);
        this.roofMaterial.setShininess(10.0);
        this.roofMaterial.setTexture(this.roofTexture);
        this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.wallMaterial = new CGFappearance(this.scene);
        this.wallMaterial.setAmbient(0.7, 0.7, 0.7, 1);
        this.wallMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
        this.wallMaterial.setSpecular(0.2, 0.2, 0.2, 1);
        this.wallMaterial.setShininess(10.0);
        this.wallMaterial.setTexture(this.wallTexture);
        this.wallMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.wallDoorMaterial = new CGFappearance(this.scene);
        this.wallDoorMaterial.setAmbient(0.7, 0.7, 0.7, 1);
        this.wallDoorMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
        this.wallDoorMaterial.setSpecular(0.2, 0.2, 0.2, 1);
        this.wallDoorMaterial.setShininess(10.0);
        this.wallDoorMaterial.setTexture(this.wallDoorTexture);
        this.wallDoorMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.wallWindowMaterial = new CGFappearance(this.scene);
        this.wallWindowMaterial.setAmbient(0.7, 0.7, 0.7, 1);
        this.wallWindowMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
        this.wallWindowMaterial.setSpecular(0.3, 0.3, 0.3, 1);
        this.wallWindowMaterial.setShininess(10.0);
        this.wallWindowMaterial.setTexture(this.wallWindowTexture);
        this.wallWindowMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.columnMaterial = new CGFappearance(this.scene);
        this.columnMaterial.setAmbient(0.8, 0.8, 0.8, 1);
        this.columnMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.columnMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.columnMaterial.setShininess(10.0);
        this.columnMaterial.setTexture(this.pillarTexture);
        this.columnMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }


    display() {
        this.scene.pushMatrix();
        this.scene.scale(3,3,3);
        
        this.columnMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.wallSide-1,0,this.wallSide-1);
        this.scene.scale(0.25,3,0.25);
        this.column.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-this.wallSide+1,0,this.wallSide-1);
        this.scene.scale(0.25,3,0.25);
        this.column.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(this.wallSide-1,0,-this.wallSide+1);
        this.scene.scale(0.25,3,0.25);
        this.column.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-this.wallSide+1,0,-this.wallSide+1);
        this.scene.scale(0.25,3,0.25);
        this.column.display();
        this.scene.popMatrix();        
        
        this.scene.pushMatrix();
        this.scene.scale(this.wallSide, this.wallSide, this.wallSide);
        this.scene.translate(0.0, 0.5, 0.0);
        this.walls.display();
        this.scene.popMatrix();

        this.roofMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.0, this.wallSide, 0.0);
        this.scene.scale(this.roofSide, this.roofHeight, this.roofSide);
        this.scene.rotate(Math.PI/4, 0.0, 1.0, 0.0);
        this.roof.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}


