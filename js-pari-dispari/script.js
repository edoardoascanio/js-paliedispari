var numeroUtente = parseInt(prompt("Inserisci un numero pari o dispari da 1 a 5"))
console.log(numeroUtente);

var numeroComputer = Math.round(Math.random()*4+1); 
console.log(numeroComputer)

var somma = numeroComputer + numeroUtente
var pari = somma % 2 === 0
var risultato

