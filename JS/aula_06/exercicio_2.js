// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numbers = [90, 122, 197, 32, 198, 1, 84, 97, 10, 47];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0){
        console.log(number)
    }
}