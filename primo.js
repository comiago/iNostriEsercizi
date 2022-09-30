/*
Si scriva un programma che legge un intero n e valuti se è primo (non esiste
un numero d in [2,n-1] tale che n sia divisibile per d). Si stampi il tempo di esecuzione
del programma.
*/

// Partendo da 2 controllo se il numero è divisibile per i allora non è primo e ritorno false
function primo(num){
  let i = 2;
  while (i < n){
    if (n % i == 0)
      return false;
    i++;
  }
  return true;
}

let n, begin = Date.now();

// Prendo la variabile
n = Number(prompt('N: '));

// Richiamo la funzione e stampo la dicitura corrispondente al risultato
console.log(n, !primo(n) ? 'non' : '', 'è un numero primo');

console.log('\nExectution time:', Date.now() - begin);