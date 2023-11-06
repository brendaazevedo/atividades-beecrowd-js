
// Questão 1017 - Gasto de Combustível 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempo = parseInt(lines.shift());
let velocidade = parseInt(lines.shift());

let distancia = (tempo * velocidade)/12;

console.log(distancia.toFixed(3));
