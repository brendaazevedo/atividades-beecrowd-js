
// Questão 1177 - Preenchimento em Vetor II

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());
let N = [];

for (let i = 0; i < 1000; i++) {
    N[i] = i%valor;
    
    console.log("N["+ [i] + "] = " + N[i]);
    
}
