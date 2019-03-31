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

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            this.vertices.push(ca, 0, sa);
            this.vertices.push(caa, 0, saa);
            this.vertices.push(ca, 1, sa);
            this.vertices.push(caa, 1, saa);
            var normal= [
                ca,
                0,
                sa
            ];

            var normal1= [
                caa,
                0,
                saa
            ];

            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;
            
            var nsize1=Math.sqrt(
                normal1[0]*normal1[0]+
                normal1[1]*normal1[1]+
                normal1[2]*normal1[2]
                );
            normal1[0]/=nsize1;
            normal1[1]/=nsize1;
            normal1[2]/=nsize1;


            this.normals.push(...normal);
            this.normals.push(...normal1);
            this.normals.push(...normal);
            this.normals.push(...normal1);

            this.indices.push(4*i, (4*i+2), (4*i+1));
            this.indices.push((4*i+1), (4*i+2), (4*i+3));

            ang+=alphaAng;
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


