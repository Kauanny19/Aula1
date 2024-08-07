const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Digite um número: "));
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit)