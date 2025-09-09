/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

//creo array bici di oggetti
const bici = [
  { nome: "Bianchi", peso: 7 },
  { nome: "Pinarello", peso: 6.5 },
  { nome: "Trek", peso: 6.8 },
  { nome: "Specialized", peso: 7.2 }
];

//trovo la bici più leggera comparando il peso di ognuna col ciclo
let biciLeggera = bici[0];
for (let i = 1; i < bici.length; i++) {
  if (bici[i].peso < biciLeggera.peso) {
    biciLeggera = bici[i];
  }
}

//mostro il risultato in HTML
const display = document.getElementById("biciLighter");
display.innerText = `La bici più leggera è ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`;

//stampo in console
console.log("La bici più leggera è:", biciLeggera.nome, "con un peso di", biciLeggera.peso, "kg");



/********************************************************************/
/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/


//creo array di oggetti di squadre
const squadre = [
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Perugia", punti: 0, falliSubiti: 0 }
];

//creo funzione per generare numeri random
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//inserimento punti e falli con i numeri random
for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = numeroRandom(0, 80);
    squadre[i].falliSubiti = numeroRandom(0, 50);
}

//creo nuovo array contenente elementi nomi e falli subiti
const squadreFalli = [];
for (let i = 0; i < squadre.length; i++) {
    //inserisco nomi e falli subiti nel nuovo array
    squadreFalli.push([squadre[i].nome, squadre[i].falliSubiti]);
}

//stampo in console
console.log("Array completo:", squadre);
console.log("Array con solo nomi e falli subiti:", squadreFalli);