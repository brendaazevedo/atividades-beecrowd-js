
// Questão 1176 - Fibonacci em Vetor 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let T = parseInt(lines[0]);
let N = [];

for (let i = 1; i <= T; i++) {
    N.push(parseInt(lines[i]));
}

function fib(num) {
    if (num <= 0) return 0;
    if (num === 1) return 1;
    
    let a = 0;
    let b = 1;
    let resultado;
    
    for (let i = 2; i <= num; i++){
        resultado = a + b;
        a = b;
        b = resultado;
    }
    return resultado;
}

for (let o = 0; o <T; o++) {
    valor = fib(N[o]);
    console.log("Fib("+N[o]+") = "+ valor);
}