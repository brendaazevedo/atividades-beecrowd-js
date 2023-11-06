
// Questão 1019 - Conversão de Tempo 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let segundos = parseInt(input);

let horas = parseInt(segundos / 3600);
segundos = segundos % 3600;

let minutos = parseInt(segundos / 60);
segundos = segundos % 60;

console.log(horas + ":" + minutos + ":" + segundos);
