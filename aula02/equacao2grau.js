const readline = require('readline-sync');

function calculaDelta(a, b, c){
    return b*b - (4 * a * c)   
}

function recebeFloat(mensagem){
    return readline.questionFloat(mensagem);
}

function calculaRaiz(b, delta, a){
    if(delta < 0){
        console.log("Nao tem raiz.")
    } else { 
        const raizDaEquacao = (-b - Math.sqrt(delta)) / (2*a);
        const segundaRaizDaEquacao = (-b + Math.sqrt(delta)) / (2*a);
        console.log(raizDaEquacao);
        console.log(segundaRaizDaEquacao);   
    }
}

const aRecebido = recebeFloat("Digite o valor de A");
const bRecebido = recebeFloat("Digite o valor de B");
const cRecebido = recebeFloat("Digite o valor de C");
const delta = calculaDelta(aRecebido, bRecebido, cRecebido);
calculaRaiz(bRecebido, delta, aRecebido);
