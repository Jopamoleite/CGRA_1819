/**
* MyLightning
* @constructor
*/
class MyLightning extends MyLSystem{
    constructor (scene) {
        super(scene);

        this.initMaterials();

        this.initGrammar();

        this.angle = 25.0;
		this.axiom = "X";
		this.iterations = 3;
		this.scaleFactor = 0.5;

        this.doGenerate = function(){
        	this.generate(
        		this.axiom,
        		{
					"F": [ "FF" ],
                    "X": [ "F[-X][X]F[-X]+X", "F[-X][X]F[-X]+F", "F[-X][-X]+F[-X]" ]
        		},
        	 	this.angle,
             	this.iterations,
             	this.scaleFactor
             );
        }

    }

    initMaterials(){
        this.lightningMaterial = new CGFappearance(this.scene);
        this.lightningMaterial.setAmbient(1.0,1.0,1.0,1.0);
        this.lightningMaterial.setDiffuse(1.0,1.0,1.0,1.0);
        this.lightningMaterial.setSpecular(1.0,1.0,1.0,1.0);
        this.lightningMaterial.setShininess(10.0);
    }

    initGrammar(){
    	this.grammar = {
    		"F": new MyQuad(this.scene),
    		"X": new MyQuad(this.scene)
    	};
    }

    startAnimation(t){
    	this.doGenerate();
    	this.depth = 1;
    	this.time = 0;
    }

    update(t){
    	this.deltaT = t - this.time;
		this.depth = deltaT/1000 * 15;
		
    }

    display(){
    	this.scene.pushMatrix();
    	this.scene.scale(3,4,1);
        this.scene.rotate(Math.PI, 0.2, 0.0, 1.0);
        this.scene.translate(0.0, -20.0, 0.0);
    	this.lightningMaterial.apply();
    	super.display();
    	this.scene.popMatrix();
    }
}
