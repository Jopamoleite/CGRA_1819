/**
* MyHalfSphere
* @constructor
*/
class MyHalfSphere extends CGFobject
{
	constructor(scene, radius, slices, stacks, reverse)
	{
        super(scene);
        this.radius = radius;
		this.slices = slices;
        this.stacks = stacks;
		if(reverse != undefined){
			this.reverse = true;
		}else{
			this.reverse = false;
		}

		this.initBuffers();
	};

	//Definition of a half sphere, used by our nest, boat and others
	initBuffers()
	{
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		var theta = 2* Math.PI / this.slices;
		var phi = (Math.PI / 2.0) / this.stacks;

		//Goes through the number of horizontal and vertical divisions (stacks and slices) and calculates the triangles according to mathematical formulas
		for (var i = 0; i <= this.stacks; i++)
		{
			for (var j = 0; j < this.slices; j++)
			{
				var x = this.radius * Math.cos(phi * i) * Math.cos(theta * j);
				var y = this.radius * Math.cos(phi * i) * Math.sin(theta * j);
				var z = this.radius * Math.sin(phi * i);
				this.vertices.push(x, y, z);
				this.normals.push(x, y, z);
				this.texCoords.push(((Math.cos(phi*i)*Math.cos(theta*j))+1)/2, 1 - ((Math.cos(phi*i)*Math.sin(theta*j))+1)/2);
			}
		}

		if(this.reverse){
			for (var i = 0; i < this.stacks; i++)
			{
				for (var j = 0; j < this.slices - 1; j++)
				{
					this.indices.push(i * this.slices + j + 1, i * this.slices + j, (i + 1) * this.slices + j);
					this.indices.push((i + 1) * this.slices + j + 1, i * this.slices + j + 1,  (i + 1) * this.slices + j);
				}
	
				this.indices.push(i * this.slices, i * this.slices + this.slices - 1,  (i + 1) * this.slices + this.slices - 1);
				this.indices.push(i * this.slices + this.slices, i * this.slices,  (i + 1) * this.slices + this.slices - 1);
			}

		}else{
			for (var i = 0; i < this.stacks; i++)
			{
				for (var j = 0; j < this.slices - 1; j++)
				{
					this.indices.push(i * this.slices + j, i * this.slices + j + 1, (i + 1) * this.slices + j);
					this.indices.push(i * this.slices + j + 1, (i + 1) * this.slices + j + 1, (i + 1) * this.slices + j);
				}
	
				this.indices.push(i * this.slices + this.slices - 1, i * this.slices, (i + 1) * this.slices + this.slices - 1);
				this.indices.push(i * this.slices, i * this.slices + this.slices, (i + 1) * this.slices + this.slices - 1);
			}
		}
		
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
    };
};