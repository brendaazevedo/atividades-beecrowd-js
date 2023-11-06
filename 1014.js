
// Questão 1014 - O Consumo 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let Y = parseFloat(lines.shift());

let consumo_medio = X / Y;

console.log(consumo_medio.toFixed(3)+ " km/l");