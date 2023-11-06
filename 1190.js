
// Questão 1190 - Área Direita

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let operacao = lines.shift();
let soma = 0;
let contador = 0;

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        let n = parseFloat(lines.shift());
        if ((i < 6 && j > 11 - i) || (i > 5 && j > i)) {
            soma += n;
            contador++;
        }
    }
    
}

let resultado = operacao === "S" ? soma : soma / contador;
console.log(resultado.toFixed(1));