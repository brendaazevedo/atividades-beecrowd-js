
// Questão 1060 - Números Positivos 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = 0; 

for (let i = 0; i < 6; i++) {
    let numero = parseFloat(lines.shift());
   if (numero > 0) {
       valor++;
   }
}

console.log(valor + " valores positivos");