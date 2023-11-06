
// Questão 1175 - Troca em Vetor I 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = [];

for (i = 0; i < 20; i++) {
  N[i] = parseInt(lines.shift()); 
}

for (i = 0; i < N.length; i++) {
    let posicao = (N.length -1 -i);
    console.log("N[" +i+ "] = " + N[posicao]);
}