
// Questão 1002 - Área do Circulo 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = parseFloat(lines.shift());
let pi = 3.14159;

let area = Math.pow(raio,2) * pi;

console.log("A=" + area.toFixed(4));