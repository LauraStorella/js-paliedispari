// // ESERCIZIO #1 - PALINDROMA
// /* Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma */
//

// IN-BUILT Functions
// RICHIESTA INPUT UTENTE
// Richiesta parola utente
var userWord = prompt('Scrivi una parola e scopri se è un palindromo');
console.log(userWord);

// FUNZIONE
function checkPalindrome(argUserWord) {

  // Converto userWord in array, reverse per invertire lettere e converto in stringa
  var selectedWord = userWord.split("").reverse().join("");

  // Condizione
  if (selectedWord == userWord) {
    console.log(userWord + ' è una parola palindroma');
  } else {
    console.log(userWord + ' non è una parola palindroma');
  }
}
// Chiamo funzione
checkPalindrome(userWord);


// // FOR Loop
// // RICHIESTA INPUT UTENTE
// // Richiesta parola utente
// var userWord = prompt('Scrivi una parola e scopri se è un palindromo');
//
// // FUNZIONE
// function checkPalindrome(userWord){
//   // Converto userWord in array, reverse per invertire lettere e converto in stringa
//   var selectedWord = userWord.split("").reverse().join("");
//
//   for (var i = 0; i < userWord.length; i++) {
//     // Confronto la parola (lettere da dx a sx e viceversa)
//     if (userWord == wordReverse) {
//       console.log(userWord + ' è una parola palindroma');
//     } else {
//       console.log(userWord + ' non è una parola palindroma');
//     }
//   }
// }
// // Chiamo la funzione (con input immesso da utente userWord)
// checkPalindrome(userWord);





// // ESERCIZIO #2 - PARI E DISPARI
// /* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto */
//
//
// // RICHIESTA INPUT
// // Richiesta input user
// var userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
// console.log(userNumber);
// // Richiesta input pc
// var pcNumber = Math.floor(Math.random()*5) +1;
// console.log(pcNumber);
//
// // FUNCTION
// function evenOdd(argUserNumber, argPcNumber) {
//
//   var sumNumber = argUserNumber + argPcNumber;
//   console.log(sumNumber);
//
//   if (sumNumber % 2 === 0) {
//     console.log('User wins!');
//   } else {
//     console.log('Pc wins!');
//   }
//
//   return sumNumber;
// }
//
// // Chiamo funzione
// evenOdd(userNumber, pcNumber)
