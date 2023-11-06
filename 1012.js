
// Questão 1012 - Área

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A,B,C] = input.split(" ").map(item => parseFloat(item));
let pi = 3.14159;

let triangulo = (A * C)/2;
let circulo = Math.pow(C,2) * pi;
let trapezio = ((A + B) * C)/2;
let quadrado = B * B;
let retangulo = A * B;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));