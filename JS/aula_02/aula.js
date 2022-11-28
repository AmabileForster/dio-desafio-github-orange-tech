// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.


let priceGas = 4.93; // utilizado a média do estado RS do preço da gasolina pelo site da petrobas no dia 28/11/2022.
let priceEthanol = 5.49 // // utilizado a média do estado RS do preço do etanol em materia da CNN no dia 04/10/2022.

let mediaGas = 13.5; // média baseada no gasto por KM/L do meu ultimo carro.
let mediaEthanol = 9.9; // média baseada no gasto por KM/L do meu ultimo carro.

const KM = 596; // trajeto saindo de Blumenau, SC para Caxias do Sul, RS, via Rota do Sol.

let gasOrEthanol = 'Ethanol';

if (gasOrEthanol === 'Gas') {
    let calculation = (KM / mediaGas) * priceGas;
    console.log(calculation.toFixed(2));
} else {
    let calculation = (KM / mediaEthanol) * priceEthanol;
    console.log(calculation.toFixed(2));
}