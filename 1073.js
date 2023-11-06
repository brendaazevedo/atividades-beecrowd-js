
// Questão 1073 - Quadrado de Pares

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines.shift());

for (let i = 2; i <= numero; i+=2) {
        console.log(i + "^2 = " + i * i);
    }