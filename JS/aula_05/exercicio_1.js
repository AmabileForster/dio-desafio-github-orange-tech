// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.

class Carros {
    marca;
    cor;
    consumo;

    constructor(marca, cor, consumo){
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;
    }
}