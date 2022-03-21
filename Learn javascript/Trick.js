//Metodo obsoleto
var pi_greco1 = 3.14;

//Altro modo per dichiarare le variabili
//Funziona solo dentro al blocco dove sono dichiarati
//Il blocco viene definito con {}
const pi_greco2 = 3.14
let pi_greco3 = 3.14

const messagggio1 = "saluto " + "dal vostro " + "Marco"

//Metodo alternativo
nome = "Marco";
cognome = "Vinciguerra"
const messaggio2 = `Saluti da ${nome} ${cognome}`;
console.log(messagggio1);
console.log(messaggio2)

anni = 99;
const pitone1 = {
    nome: "Marco",
    cognome: "Vinciguerra",
    anni //Prende in automatico 99
}

//Oggetti con valori annidati
anni = 99;
const pitone2 = {
    nome: "Marco",
    cognome: "Vinciguerra",
    linguaggi: {
        python: 10,
        javascript: 9
    }
}