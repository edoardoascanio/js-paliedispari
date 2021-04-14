var pariDispari = prompt("Scrivi 'pari' o 'dispari'")
console.log(pariDispari);

var numeroComputer = Math.round(Math.random()*4+1); 
console.log(numeroComputer)

var somma = numeroComputer + numeroUtente
var pari = somma % 2 === 0
var risultato


if(pariDispari !== "pari" && pariDispari !== "dispari"){
    alert(" E' necessario scrivere solo 'pari' o 'dispari'")
}

else{
    var numeroUtente = parseInt (prompt("Inserisci un numero tra 1 e 5"))
    console.log(numeroUtente);
}

if(pari) {
    risultato = "Pari"
 } 
 
 else{
     risultato = "Dispari"
 }
 
 if(risultato === pariDispari){
     console.log ("Giocatore 1 Vince")
 }
 
 else{
     console.log ("Giocatore 2 Vince")
 }
