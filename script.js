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