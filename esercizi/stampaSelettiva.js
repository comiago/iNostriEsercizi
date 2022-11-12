/*
Si scriva un programma che legga da tastiera una serie di interi e stampi
l’elemento letto se rispetta una delle seguenti proprietà: (i) E’ positivo e pari, oppure (ii) è
negativo e preceduto (nell’ordine di inserimento) da un intero con valore maggiore o
uguale. Terminare la l’acquisizione alla lettura di uno zero.
*/

let n, n1;

while(true){
  // Prendo il numero
  n = Number(prompt('N: '));
  // Se il numero è 0 esco dal ciclo
  if (n == 0)
    break;
  // Se è pari o è negativo e preceduto da un numero >= lo stampo
  if (n % 2 == 0 || n < 0 && n1 >= n){
    console.log(n);
  }
  n1 = n;
}