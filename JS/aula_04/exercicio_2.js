// IMC com funções

// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

// IMC em adultos Condição:
// - Abaixo de 18.5 Abaixo do peso;
// - Entre 18.5 e 25 Peso normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obesidade Grave;

function IMC (peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classicificarIMC(imc) {
    if (imc < 18.5){
        return 'Está abaixo do peso!';
    } else if(imc >= 18.5 && imc < 25){
        return 'Está no peso ideal!';
    } else if(imc >= 25 && imc < 30){
        return 'Está acima do peso!';
    } else if(imc >= 30 && imc < 40){
        return 'Está com obesidade!';
    } else {
        return 'Está com obesidade grave!';
    }
}

(function () {
    const peso = 126;
    const altura = 1.69;

    const imc = IMC(peso,altura);
    console.log(classicificarIMC(imc));
})();