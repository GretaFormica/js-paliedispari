// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//funzioni
function isEven(num) {
    return num % 2 == 0;
}

function random(min, max) {
    const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroRandom;
}

//dichiarazioni variabili e costanti
const pari = document.getElementById('btn_pari');
const dispari = document.getElementById('btn_dispari');

const min = 1;
const max = 5;

const computerNum = random(min, max);


//bottoni
pari.addEventListener(
    'click',

    function () {
        const userNum = parseInt(prompt("inserisci un numero da 1 a 5"));
        const sum = userNum + computerNum;
        if (isEven(sum)) {
            alert("hai vinto! il tuo numero: " + userNum + " il computer: " + computerNum + " e la somma é: " + sum);
        } else {
            alert("hai perso! il tuo numero: " + userNum + " il computer: " + computerNum + " e la somma é: " + sum);
        }
    }

)


dispari.addEventListener(
    'click',

    function () {
        if (isEven(sum)) {
            alert("hai perso! il tuo numero: " + userNum + " il computer: " + computerNum + " e la somma é: " + sum);
        } else {
            alert("hai vinto! il tuo numero: " + userNum + " il computer: " + computerNum + " e la somma é: " + sum);
        }
    }

)