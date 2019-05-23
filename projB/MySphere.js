/**
* MySphere
* @constructor
*/
class MySphere extends CGFobject
{
	constructor(scene, radius, slices, stacks)
	{
        super(scene);
        this.radius = radius;
		this.slices = slices;
        this.stacks = stacks;

        this.frontHalf = new MyHalfSphere(this.scene, this.radius, this.slices, this.stacks);
        this.backHalf = new MyHalfSphere(this.scene, this.radius, this.slices, this.stacks);

    };
    
    display(){
        this.frontHalf.display();
        this.scene.pushMatrix();
        if(this.slices % 2 != 0)
            this.scene.rotate(Math.PI/this.slices, 0, 0, 1);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.backHalf.display();
        this.scene.popMatrix();
    }
};