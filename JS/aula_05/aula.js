class Pessoa {
    nome;
    idade;
    anoDeNascimento

    constructor (nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

// const amabile = new Pessoa("Amabile", 24);

// amabile.descrever();

// console.log(amabile);


function compararPessoas (p1, p2){
    if (p1.idade > p2.idade) {
        console.log (`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log (`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log (`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const amabile = new Pessoa('Amabile', 24);
const lucas = new Pessoa('Lucas', 25);

compararPessoas(amabile, lucas);