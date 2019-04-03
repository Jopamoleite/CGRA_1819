/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
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

            var sa=Math.sin(ang);
            var ca=Math.cos(ang);

            this.vertices.push(ca, 1, sa);
            this.vertices.push(ca, 0, sa);

            if((i%2)==0){
                this.texCoords.push(0.0, 0.0);
                this.texCoords.push(0.0, 1.0);
            }
            else{
                this.texCoords.push(1.0, 0.0);
                this.texCoords.push(1.0, 1.0);
            }

            var normal= [
                ca,
                0,
                sa
            ];
            
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            this.normals.push(...normal);
            this.normals.push(...normal);

            if(i != this.slices-1 && i != 0){
                this.indices.push(2*i, (2*i+2), (2*i+1));
                this.indices.push((2*i+1), (2*i+2), (2*i+3));
            }

            ang+=alphaAng;
        }

        if(this.slices > 2){
            this.indices.push(0, 2, 1);
            this.indices.push(1, 2, 3);
            this.indices.push(2*(this.slices-1), 0, (this.slices-1)*2+1);
            this.indices.push((this.slices-1)*2+1, 0, 1);
            
            this.vertices.push(Math.cos(0), 1, Math.sin(0));
            this.vertices.push(Math.cos(0), 0, Math.sin(0));
            if((this.slices%2)==0){
                this.texCoords.push(0.0, 0.0);
                this.texCoords.push(0.0, 1.0);
            }
            else{
                this.texCoords.push(1.0, 0.0);
                this.texCoords.push(1.0, 1.0);
            }

            this.normals.push(normal[0]);
            this.normals.push(normal[1]);
        }

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


