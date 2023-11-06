
// Questão 1005 - Média 1

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let MEDIA = (A * 3.5 + B * 7.5 )/11.0;

console.log("MEDIA = " + MEDIA.toFixed(5));