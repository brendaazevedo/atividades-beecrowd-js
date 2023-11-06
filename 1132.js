
// Questão 1132 - Múltiplos de 13

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [x, y] = lines;

const maior = Math.max(x, y);
const menor = Math.min(x, y);
let valor = 0;                       

    for (let i = menor; i <= maior; i++) {
        if (i % 13 !== 0) { 
            valor += i;
        
       } else {
        for (let i = maior; i <= menor; i++) {
            if (i % 13 !== 0);
              valor += 1;
        }
    }
    }

console.log(valor);
