
// Questão 1013 - O Maior

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = input.split(" ").map((item) => parseInt(item));

let maior_valor = Math.max(A,B,C);

console.log(maior_valor + " eh o maior");