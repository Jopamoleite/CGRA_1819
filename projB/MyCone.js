/**
* MyCone
* @constructor
*/
class MyCone extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){

            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.indices.push(i, i+1, this.slices+1);
            //Different way to display texture
           // if(i % 2 == 0){
             //   this.texCoords.push(0, 1);
          // }else{
          //      this.texCoords.push(1, 1);
          //  }
            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
            //Displays coords centered around the middle, using spherical coordinates
            this.texCoords.push(0.5+0.5*Math.cos(ang), 0.5+0.5*Math.sin(ang)); 
            ang+=alphaAng;
        }

        this.vertices.push(Math.cos(0), 0, Math.sin(0));
        
        this.normals.push(this.normals[0], this.normals[1], this.normals[2]);
        
        this.texCoords.push(0.5+0.5*Math.cos(ang), 0.5+0.5*Math.sin(ang)); 
/*
        if(this.slices % 2 != 0){
            this.texCoords.push(1, 1);
        }else{
            this.texCoords.push(0, 1);
        }*/
        this.vertices.push(0,1,0);
        this.normals.push(0,1,0);
        //this.texCoords.push(0.5, 0);
        this.texCoords.push(0.5, 0.5);
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


