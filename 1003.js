
// Questão 1003 - Soma Simples

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

let SOMA = A + B;

console.log("SOMA = " + (A + B));