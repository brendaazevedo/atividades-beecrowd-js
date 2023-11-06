
// Questão 1070 - Seis Números Ímpares

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines.shift());
if (numero > 0) {
    let contador = 0;
    if (numero % 2 !=0) {
        contador = 11;
    } else {
        contador = 12;
    }

    for (i = 0; i < contador; i++) {
        if (numero % 2 !=0) {
            
            console.log(numero);
        }
        numero++;
        
    }
}