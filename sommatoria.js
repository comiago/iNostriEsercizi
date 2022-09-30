/*
Si scriva un programma che dato un intero n calcoli e stampi la somma
dei numeri da 1 a n.
*/

let n;

// Prendo la variabile
n = Number(prompt('N: '));

// Calcolo la somma con Gauss e la stampo
console.log((n * (n + 1)) / 2);

// Calcolo la somma con l'iterazione
let sum = 0;
for (let i = 1; i <= n; i++)
  sum += i;

console.log(sum);