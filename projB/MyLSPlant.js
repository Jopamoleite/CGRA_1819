/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
	constructor(scene) {
        super(scene);

        this.axiom = "X";
        this.angle = 40.0;
        this.iterations = 4;
        this.scaleFactor = 0.6;

        //Function that generates a tree
        this.doGenerate = function () {
            this.generate(
                this.axiom,
                {
                    "F": [ "FF" ],
                    "X": [ "F[+&X][/X]F[-^X]+[\X]", "&F[^X]^[^-X]^[^\X]+/X", "F[+&&X][-^^X]F[/&&X][\&&X]", "F[/X][-X]F[\\X]+X", "FF[\-X][X]^[X]&/X", "F[^+X][-X]&X", "FF[&\\X][/^X][&/X]\^X"]
                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        this.doGenerate();
    }

    init(){
        // cria o lexico da gramática
        this.initGrammar()

    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }
}