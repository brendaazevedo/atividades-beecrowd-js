
// Questão 1094 - Experiências

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift());
let total = 0;
let coelhos = 0;
let ratos = 0;
let sapos =0;

for (i = 1; i <= n; i++) {
    let valor = lines.shift();
    
    let vetor = valor.split(" ");
    let quantidade = parseInt(vetor[0]);
    let tipo = vetor[1];
    
    if (tipo == "C") {
        coelhos += quantidade;
        
    } else if (tipo == "R") {
        ratos += quantidade;
    
    } else if (tipo == "S") {
        sapos += quantidade;
    }
    
    total = total + quantidade;
}

console.log("Total: " + total + " cobaias");
console.log("Total de coelhos: " + coelhos);
console.log("Total de ratos: " + ratos);
console.log("Total de sapos: " + sapos);
console.log("Percentual de coelhos: " + ((coelhos / total) * 100).toFixed(2) + " %");
console.log("Percentual de ratos: " + ((ratos / total) * 100).toFixed(2) + " %");
console.log("Percentual de sapos: " + ((sapos / total) * 100).toFixed(2) + " %");