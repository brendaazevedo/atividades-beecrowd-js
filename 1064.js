
// Questão 1064 - Positivos e Média

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = 0; 
let soma = 0;

for (let i = 0; i < 6; i++) {
    let numero = parseFloat(lines.shift());
   if (numero > 0) {
       valor++;
       soma = soma + numero;
   }
         
}

let media = soma / valor;

console.log(valor + " valores positivos");
console.log(media.toFixed(1));