// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let price = 5.05; // utilizado a média nacional pelo site da petrobas no dia 28/11/2022.
let media = 13.5; // média baseada no gasto por KM/L do meu ultimo carro.
let KM = 596; // trajeto saindo de Blumenau, SC para Caxias do Sul, RS, via Rota do Sol.

const calculo = (KM / media) * price;


console.log(calculo.toFixed(2));
