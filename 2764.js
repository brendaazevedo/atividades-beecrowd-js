
// Questão 2764 - Entrada e Saída de Data 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let prompt = function(texto) {return lines.shift()};

let data = prompt().split('/');

let dia = data[0];
let mes = data[1];
let ano = data[2];

console.log(mes+"/"+dia+"/"+ano);
console.log(ano+"/"+mes+"/"+dia);
console.log(dia+"-"+mes+"-"+ano);
