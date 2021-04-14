var parolaUtente = prompt("Inserisci una parola");
console.log("Parola inserita: " + parolaUtente)
var carattere;
var parolaInversa = invertiParola(parolaUtente);

if (parolaUtente.length < 3) {
    alert("La parola inserita è troppo corta")
    console.log("La parola inserita è troppo corta")
}

function invertiParola(parolaUtente) {
    var parolaInversa = '';

    var i = parolaUtente.length - 1;

    while (i >= 0) {
        parolaInversa += parolaUtente[i];
        i--;
    }

    return parolaInversa;
}

if (parolaUtente == parolaInversa) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}
