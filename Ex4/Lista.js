const prompt = require('prompt-sync')();

let tamanho = parseFloat(prompt("Quantos números: "));
let numero = 0;
let lista = [];

for(let i = 0; i < tamanho; i++ ){
    numero = parseFloat(prompt("Digite o número:"));
    lista.push(numero);
}
console.log(lista);