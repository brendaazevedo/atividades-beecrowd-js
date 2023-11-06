
// Questão 1008 - Salário 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
let horas_trabalhadas = parseInt(lines.shift());
let valor_hora = parseFloat(lines.shift());

let salario = (horas_trabalhadas * valor_hora);

console.log("NUMBER = " + number);
console.log("SALARY = U$ " + salario.toFixed(2));