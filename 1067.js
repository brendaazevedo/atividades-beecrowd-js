
// Questão 1067 - Números  Ímpares

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift()); 

for (i = 1; i <= X; i++) {
    if (i % 2 !== 0) {
        
      console.log(i);  
    }
}