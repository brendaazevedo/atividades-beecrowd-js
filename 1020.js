
// Questão 1020 - Idade em Dias 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines.shift());

let ano = numero / 365;
numero = numero % 365;

let mes = numero / 30;
numero = numero % 30;

let dia = numero;

console.log(`${Math.floor(ano)} ano(s)`);
console.log(`${Math.floor(mes)} mes(es)`);
console.log(`${Math.floor(dia)} dia(s)`);
