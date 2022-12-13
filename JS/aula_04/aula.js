// realizar uma função que diga meu nome e uma que verifique se sou maior de idade
function sayMyName(name) {
    console.log('Meu nome é ' + name);
}

sayMyName("Amabile");

function verifyAge(age) {
    if (age >= 18) {
        console.log("Você é maior de idade");
    } else {
        console.log("Você é menor de idade");
    }
}

verifyAge(24);

// fazer a junção das duas funções acima
function sayMyName(name) {
    return 'Meu nome é ' + name;
}

function verifyAge(age) {
    if (age >= 18) {
        console.log(sayMyName('Amabile') + " e eu sou maior de idade");
    } else {
        console.log(sayMyName('Amabile') + " e eu sou menor de idade");
    }
}

verifyAge(18);