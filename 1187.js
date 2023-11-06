
// Questão 1187 - Área Superior 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let operacao = lines.shift();
let soma = 0;
let contador = 0;

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        let n = parseFloat(lines.shift());
        if (i < j && j < 11 - i) {
            soma += n;
            contador++;
        }
    }
    
}

let resultado = operacao === "S" ? soma : soma / contador;
console.log(resultado.toFixed(1));