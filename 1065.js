
// Questão 1065 - Pares Entre Cinco Números 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());
let par = 0;

for (let i = 0; i < valor; i++) {
    if (i % 2 == 0) {
        par++;
    }
}

console.log(par + " valores pares");