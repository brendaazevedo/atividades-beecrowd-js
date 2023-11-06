
// Questão 1172 - Substituição em Vetor I 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (i = 0; i < 10; i++) {
    let x = parseInt(lines.shift());
    if (x <= 0 || x == 0) {
        x = 1;
    }

console.log("X[" + [i] + "] = " + x);
    
}