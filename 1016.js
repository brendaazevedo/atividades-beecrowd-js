
// Questão 1016 - Distância 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines.shift());

let tempo_distancia = distancia * 2;

console.log(tempo_distancia + " minutos");