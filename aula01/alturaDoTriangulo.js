const readline = require('readline-sync');

const base = 
readline.questionInt("Digite o valor da base: ");
const altura = 
readline.questionInt('Digite o valor da altura: ');

const areaDoTriangulo = (base * altura) / 2;

console.log("A area do triangulo e: ", areaDoTriangulo);
