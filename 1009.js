
// Questão 1009 - Salário com bônus

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = toString(lines.shift());
let salario_fixo = parseFloat(lines.shift());
let vendas = parseFloat(lines.shift());

let comissao = vendas * 0.15;
let salario_total = salario_fixo + comissao;

console.log("TOTAL = R$ " + salario_total.toFixed(2));