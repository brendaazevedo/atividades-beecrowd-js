
// Questão 1179 - Preenchimento em Vetor IV

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let par = [];
let impar = [];
let par1 = 0;
let impar1 = 0;

for (let i = 0; i < 15; i++) {
    let numero = parseInt(lines[i]);
    
    if (numero % 2 === 0) {
        par[par1] = numero;
        par1++;
        if (par1 === 5) {
            for (let j = 0; j < 5; j++) {
                console.log("par[" + j + "] = " + par[j]);
            }
            par1 = 0;
        }
    } else {
        impar[impar1] = numero;
        impar1++;
        if (impar1 === 5) {
            for (let j = 0; j < 5; j++) {
                console.log("impar[" + j + "] = " + impar[j]);
            }
            impar1 = 0;
        }
    }
}

for (let i = 0; i < impar1; i++) {
    console.log("impar["+ i + "] = " + impar[i]);
}

for (let i = 0; i < par1; i++) {
    console.log("par["+ i + "] = " + par[i]);
    
}