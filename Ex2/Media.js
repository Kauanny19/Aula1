const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite uma nota: "));
let nota2 = parseFloat(prompt("Digite outra nota: "));
let media = (nota1 + nota2)/2;

console.log("Média:", media);
if(media < 4){
    console.log("REPROVADO!!");
}
else if(media >= 4 && media < 6){
    console.log("Recuperação!!");
}
else{
    console.log("Aprovado!!");
}