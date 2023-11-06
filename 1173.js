
// Questão 1173 - Preenchimento de Vetor I 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

for (i = 0; i < 10; i++) {
    if (i != 0) {
        N*=2;
    }
    
    console.log("N["+ [i] +"] = " + N);
}
