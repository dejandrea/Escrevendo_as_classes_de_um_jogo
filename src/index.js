class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ""
    }

    atacar(){

        if (this.tipo == "mago") {
            this.ataque = "magia";
        }else if (this.tipo == "guerreiro") {
            this.ataque = "espada";
        }else if (this.tipo == "monge") {
            this.ataque = "eartes marciaispada";
        }else if (this.tipo == "ninja") {
            this.ataque = "shuriken";
        }
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)

    }

}

let hero1 = new Hero("Viúva Negra",35, "ninja");
let hero2 = new Hero("Homem de Ferro",40,"guerreiro")

hero1.atacar()
hero2.atacar()