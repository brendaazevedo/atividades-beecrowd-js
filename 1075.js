
// Questão 1075 - Resto 2 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines.shift());

for (i = 1; i <= 10000; i++) {
    if (i % numero == 2) {
        console.log(i);
    }
}