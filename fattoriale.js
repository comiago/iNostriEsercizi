/*
Si scriva un programma che dato un intero n calcoli e stampi il suo fattoriale.
Si ricorda che il fattoriale di n è n! = 1*2*....*(n-1)*n
*/

let n;

// Prendo la variabile
n = Number(prompt('N: '));

// Calcolo il fattoriale con l'iterazione
let fact = 1;
for (let i = 1; i <= n; i++)
  fact *= i;

console.log(fact);