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
                    "X": [ /*"F[-X][X]F[-X]+X", */"F[-X][X]F[-X]+FX"/*, "F[-X][X]+X"*/ ]
        		},
        	 	this.angle,
             	this.iterations,
             	this.scaleFactor
             );
        }
		
		this.doGenerate();

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

    display(){
    	this.lightningMaterial.apply();
    	super.display();
    }
}
