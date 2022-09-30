/*
Si modifichi il programma di sopra per leggere 10 numeri n e calcoli per
ciascuno se si tratta di un numero primo.
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

let n;

// Prendo la variabile
for (let i = 0; i < 10; i++){
  n = Number(prompt('N: '));
  // Richiamo la funzione e stampo la dicitura corrispondente al risultato
  console.log(n, !primo(n) ? 'non' : '', 'è un numero primo');
}