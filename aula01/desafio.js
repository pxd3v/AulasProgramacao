const readline = require('readline-sync');

const paoDeSal = readline.questionInt('Digite a quantidade de Pao De Sal vendida:');
if(paoDeSal < 0){
    console.log("O numero de paes não pode ser negativo!");
    return;
}
const paoDeDoce = readline.questionInt('Digite a quantidade de Pao De Doce vendida:')
const rosca = readline.questionInt('Digite a quantidade de Rosca vendida:');

const lucro = (paoDeSal * 3) + (paoDeDoce * 4.5) + (rosca * 5);

console.log("O lucro do dia foi:", lucro);
