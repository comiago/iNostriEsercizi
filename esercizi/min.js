/*
Si scriva un programma che legga da tastiera 10 interi e stampi il valore minimo.
*/

let n, min = Infinity;

// Prendo 9 volte il numero e se è più piccolo del minimo già memorizzato lo sostituisce
for (let i = 0; i < 9; i++){
  n = Number(prompt('N: '));
  if (n < min){
    min = n;
  }
}

console.log(min);