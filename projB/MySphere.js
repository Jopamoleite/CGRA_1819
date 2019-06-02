/**
* MySphere
* @constructor
*/
class MySphere extends CGFobject
{
	constructor(scene, radius, slices, stacks, textureFront, textureBack)
	{
        super(scene);
        this.radius = radius;
		this.slices = slices;
        this.stacks = stacks;

        this.textureFront = textureFront;
        this.textureBack = textureBack;

        //Initialization of the parts
        this.frontHalf = new MyHalfSphere(this.scene, this.radius, this.slices, this.stacks);
        this.backHalf = new MyHalfSphere(this.scene, this.radius, this.slices, this.stacks);

    };
    
    //Displays a sphere, by using two different semi-spheres
    //We used two half spheres instead of creating a new primitive from scratch because we required half a sphere for certain objects
    display(){
        this.scene.pushMatrix();
        if(this.textureFront != undefined)
        this.textureFront.apply();
        this.frontHalf.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        if(this.slices % 2 != 0)
            this.scene.rotate(Math.PI/this.slices, 0, 0, 1);
        this.scene.rotate(Math.PI, 0, 1, 0);
        if(this.textureBack != undefined)
        this.textureBack.apply();
        this.backHalf.display();
        this.scene.popMatrix();
    }
};