const readline = require('readline-sync');

const numeroGerado = Math.random() * 10;

const menorNumero = readline.questionFloat('Digite o menor numero:');
const maiorNumero = readline.questionFloat('Digite o maior numero:');

if(numeroGerado >= menorNumero){

    if(numeroGerado <= maiorNumero){
        console.log("Acertou!");
    } else {
        console.log("Errou");
    }
    
} else {
    console.log("Errou");
}

console.log(numeroGerado);
