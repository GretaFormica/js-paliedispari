// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//funzione
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

//dichiarazioni constanti
const userString = prompt("inserisci una parola");

const reverse = reverseString(userString);

//if

if (userString == reverse) {
    alert("la parola é palindroma")
} else {
    alert("la parola non é palindroma")
}