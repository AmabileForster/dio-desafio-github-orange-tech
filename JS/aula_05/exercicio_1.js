// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.

class Carros {
    marca;
    cor;
    consumoPorKM;

    constructor(marca, cor, consumoPorKM){
        this.marca = marca;
        this.cor = cor;
        this.consumoPorKM = consumoPorKM;
    }

    calculoDeConsumo(distancia,precoCombustivel){
        return (distancia * this.consumoPorKM) * precoCombustivel
    }
}

const hb20 = new Carros('Hyundai','Azul', 1/13);

console.log(hb20);
console.log(hb20.calculoDeConsumo(50, 5));

const tcross = new Carros('Volkswagen','Preto', 1/15);

console.log(tcross);
console.log(tcross.calculoDeConsumo(86, 5));