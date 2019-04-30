/**
 * MyLPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLPlant extends MyLSystem {
	constructor(scene) {
        super(scene);
    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }
}