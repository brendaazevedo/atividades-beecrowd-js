
// Questão 2763 - Entrada e Saída de CPF

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let prompt = function(texto) {return lines.shift()};
let dados = prompt("Digite o CPF").replace('-','.').split('.');

let cpf1 = dados[0];
let cpf2 = dados[1];
let cpf3 = dados[2];
let cpf4 = dados[3];
console.log(cpf1);
console.log(cpf2);
console.log(cpf3);
console.log(cpf4);