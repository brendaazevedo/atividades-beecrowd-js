
// Questão 1534 - Matriz 123

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tam = parseInt(lines.shift());

while (tam > 0) {
    let matriz = [];
    
    for (let i = 0; i < tam; i++) {
        let linha = [];
        
        for (let n = 0; n < tam; n++) {
            let aux = 0;
            if (i == n) {
                aux = 2;
            }
            if (i + n + 1 == tam) {
                aux = 1;
            }
            
            linha.push(3 - aux);
        }
        console.log(linha.join(""));
    }
    tam = parseInt(lines.shift());
}
