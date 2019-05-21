/**
* MyHalfSphere
* @constructor
*/
class MyHalfSphere extends CGFobject
{
	constructor(scene, radius, slices, stacks)
	{
        super(scene);
        this.radius = radius;
		this.slices = slices;
        this.stacks = stacks;

		this.initBuffers();
	};

	initBuffers()
	{
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		var theta = 2* Math.PI / this.slices;
		var phi = (Math.PI / 2.0) / this.stacks;

		for (var i = 0; i <= this.stacks; i++)
		{
			for (var j = 0; j < this.slices; j++)
			{
				var x = this.radius * Math.cos(phi * i) * Math.cos(theta * j);
				var y = this.radius * Math.cos(phi * i) * Math.sin(theta * j);
				var z = this.radius * Math.sin(phi * i);
				this.vertices.push(x, y, z);
				this.normals.push(x, y, z);
			}
		}

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

		for (var i = 0; i <= this.stacks; i++)
		{
			for (var j = 0; j < this.slices; j++)
			{
				this.texCoords.push(j/this.slices, i/this.stacks);
			}
		}

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
    };
};