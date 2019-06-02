/**
* MyCylinderCover
* @constructor
*/
class MyCylinderCover extends CGFobject {
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

        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            this.vertices.push(Math.cos(alphaAng*i), 0, Math.sin(alphaAng*i));
            this.normals.push(Math.cos(alphaAng*i), 0, Math.sin(alphaAng*i));
            this.texCoords.push(0.5+0.5*Math.cos(alphaAng*i), 0.5+0.5*Math.sin(alphaAng*i));
            if(i != this.slices-1)
                this.indices.push(this.slices, i, i+1);
        }
        this.vertices.push(Math.cos(0), 0, Math.sin(0));
        this.normals.push(Math.cos(0), 0, Math.sin(0));
        this.texCoords.push(0.5+0.5*Math.cos(0), 0.5+0.5*Math.sin(0));
        
        this.indices.push(this.slices, this.slices-1, 0);
        this.indices.push(this.slices+1, this.slices, 0);

        
        this.vertices.push(0, 0, 0);
        this.normals.push(0, 1, 0);
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


