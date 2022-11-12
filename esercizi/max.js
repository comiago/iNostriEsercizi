/*
Scrivere un programma che legga 3 numeri da tastiera e mostri a
video il loro massimo.
*/

let n, max = 0;

// Prendo 3 volte il numero e se è più grande del massimo già memorizzato lo sostituisce
for (let i = 0; i < 3; i++){
  n = Number(prompt('N: '));
  if (n > max){
    max = n;
  }
}

console.log(max);