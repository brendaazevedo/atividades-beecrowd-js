
// Questão 1174 - Seleção em Vetor I 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (i = 0; i < 100; i++) {
    let A = parseFloat(lines.shift());
    if (A <= 10) {
        console.log("A["+ [i] +"] = " + A.toFixed(1));
    } 
}