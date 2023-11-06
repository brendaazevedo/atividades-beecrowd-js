
// Questão 1097 - Sequência IJ 3 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let j = 7;

for (i = 1; i < 10; i+=2) {
    console.log("I=" + i + " J=" + j);
    console.log("I=" + i + " J=" + (j-1));
    console.log("I=" + i + " J=" + (j-2));
    
j+=2; 

}