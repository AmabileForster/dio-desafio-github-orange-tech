// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// 1 - À vista Débito, recebe 10% de desconto;
// 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

let price = 299.90;
let payment = 4;

if (payment === 1){
    const value = price - (price * 0.1) ;
    console.log(`O preço a ser pago é ${value}.`);
} else if (payment === 2){
    const value = price - (price * 0.15);
    console.log(`O preço a ser pago é ${value}.`);
} else if (payment === 3){
    const value = price / 2;
    console.log(`O valor das parcelas é ${value}, valor total é ${price}.`);
} else {
    const value = price + (price * 0.1) ;
    console.log(`O preço a ser pago é de ${value}.`);
}