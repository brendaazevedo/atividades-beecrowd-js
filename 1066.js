
// Questão 1066 - Pares, Ímpares, Positivos e Negativos

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

for (i = 0; i < 5; i++) {
    let valor = parseInt(lines.shift());
    
    if (valor % 2 == 0) {
        pares++;
    } 
    if (valor % 2 !=0) {
        impares++;
    }
    if (valor > 0) {
        positivos++;
    }
    if (valor < 0) {
        negativos++;
    }
}

console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");