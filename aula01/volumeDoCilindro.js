const readline = require('readline-sync');

const pi = Math.PI
const raio = readline.questionFloat('digite o raio');
const altura = readline.questionFloat(' digite a altura');

const volumeDoCilindro = ((raio * raio) * pi * altura) / 2;

console.log(volumeDoCilindro);
