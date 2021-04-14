var parolaUtente = prompt("Inserisci una parola");
var carattere;
var parolaInversa = "";

var i = parolaUtente.length - 1;

while (i >= 0) {
  carattere = parolaUtente[i];
  parolaInversa += carattere;
  i--;
}

console.log(parolaInversa);

if(parolaUtente == parolaInversa){
    console.log("la parola è palindroma");
} 
  
else {
    console.log("la parola non è palindroma");
}
