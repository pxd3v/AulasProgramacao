const readline = require('readline-sync');
console.log("Meu programa recebe dois numeros e calcula..")
const base = 
readline.questionInt("Digite o valor da base: ");
const altura = 
readline.questionInt('Digite o valor da altura: ');

const areaDoTriangulo = (base * altura) / 2;

console.log("A area do triangulo e: ", areaDoTriangulo);
