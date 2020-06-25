function soma(primeiroNumero, segundoNumero){
    return primeiroNumero+segundoNumero;
}

function calculaDelta(a, b, c) {
    return b * b - (4*a*c);
}

const resultado = soma(3,3);
console.log(resultado);

const delta = calculaDelta(1, -1, -12);
console.log(delta);

function calculaRaiz(delta, b, a, primeira){
    if(delta < 0){
        return null;
    } else { 
        return primeira ? (-b - Math.sqrt(delta)) / (2*a) : (-b + Math.sqrt(delta)) / (2*a);
    }
}

const primeiraRaiz = calculaRaiz(delta, b, a, true);
const segundaRaiz = calculaRaiz(delta, b, a, true);

if(primeiraRaiz == null){
    console.log("Nao tem raiz!");
} else {
    console.log("Primeira raiz: ", primeiraRaiz);
    console.log("Segunda raiz: ", segundaRaiz);
}

