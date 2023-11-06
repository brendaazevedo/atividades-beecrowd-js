
// Questão 1010 - Cálculo Simples

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift().split(" ");
let linha2 = lines.shift().split(" ");

//Linha 1
let cod1 = parseInt(linha1 [0]);
let qtd1 = parseInt(linha1 [1]);
let valor1 = parseFloat(linha1 [2]);
let valor_total1 = qtd1 * valor1;

//Linha 2
let cod2 = parseInt(linha2 [0]);
let qtd2 = parseInt(linha2 [1]);
let valor2= parseFloat(linha2 [2]);
let valor_total2 = qtd2 * valor2;

let total_pagar = (valor_total1 + valor_total2);

console.log("VALOR A PAGAR: R$ " + total_pagar.toFixed(2));