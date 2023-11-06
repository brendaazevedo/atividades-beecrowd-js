
// Questão 1004 - Produto Simples 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let v1 = parseInt(lines.shift());
let v2 = parseInt(lines.shift());

let PROD = v1 * v2;

console.log("PROD = " + PROD);