
// Questão 1074 - Par ou Ímpar

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift());

for (i = 1; i <= n; i++) {
    let x = parseInt(lines.shift());
    if (x == 0) {
        console.log("NULL");
    } else if (x % 2 == 0 && x > 0) {
        console.log ("EVEN POSITIVE");
    } else if (x % 2 == 0 && x < 0) {
        console.log("EVEN NEGATIVE");
    } else if (x % 2 != 0 && x > 0) {
        console.log("ODD POSITIVE");
    } else if (x % 2 != 0 && x < 0) {
        console.log("ODD NEGATIVE");
    }
}