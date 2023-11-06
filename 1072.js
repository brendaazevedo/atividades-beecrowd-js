
// Questão 1072 - Intervalo 2 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift());
let _in = 0;
let _out = 0;

for (i = 1; i <= n; i++) {
    
    let x = parseInt(lines.shift());
    if (x >= 10 && x <= 20) {
        _in++;
    } else {
        _out++;
    }
}

console.log(_in + " in");
console.log (_out + " out");