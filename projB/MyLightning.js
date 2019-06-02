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

		this.x =Math.floor(Math.random() * 20) -10;
		this.z =Math.floor(Math.random() * 20) -10;
		this.rotation =Math.floor(Math.random() * 8) * Math.PI/4;

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
    		"F": new MyQuadBothFaces(this.scene),
    		"X": new MyQuadBothFaces(this.scene)
    	};
    }

    startAnimation(t){
    	this.doGenerate();
    	this.depth = 0;
    	this.time = t;
    }

    update(t){
    	this.deltaT = t - this.time;
		this.depth = this.deltaT*this.axiom.length;
		//this.depth = this.axiom.length;
		if(this.depth > this.axiom.length){
			this.depth = 0;
			return;
		}
    }

    display(){
    	this.scene.pushMatrix();
        this.scene.translate(this.x, 30, this.z);
        this.scene.scale(10,7,1);
        this.scene.rotate(this.rotation, 0.0, 1.0, 0.0);
        this.scene.rotate(Math.PI, 0.0, 0.0, 1.0);
    	this.lightningMaterial.apply();
		this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);
        var i;

		this.pushCount = 0;
    	this.popCount = 0;
    	
        // percorre a cadeia de caracteres
        for (i=0; i<this.depth; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    this.pushCount+=1;
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    this.popCount+=1;
                    break;
                case "\\":
                    this.scene.rotate(this.angle,1,0,0);
                    break;
                case "/":
                    this.scene.rotate(-this.angle,1,0,0);
                    break;
                case "^":
                    this.scene.rotate(this.angle,0,1,0);
                    break;
                case "&":
                    this.scene.rotate(-this.angle,0,1,0);
                    break;
                

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive )
                    {
                        this.scene.pushMatrix();
                        this.scene.scale(0.05,1.0,1.0);
                        primitive.display();
                        this.scene.popMatrix();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    	this.scene.popMatrix();
    	var j;
    	for(j = 0; j < this.pushCount-this.popCount; ++j){
    		this.scene.popMatrix();
    	}
    }
}
