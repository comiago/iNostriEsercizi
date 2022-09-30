/*
Si scriva un programma che legge numeri finché la somma non
supera 101, quindi stampi la somma.
*/

let sum = 0, n;

// All'infinito prendo un numero e lo sommo a quello precedente
// Se questa somma è maggiore di 101 esco dal ciclo
while(true){
  n = Number(prompt('N: '));
  if (sum + n < 101)
    sum += n;
  else{
    console.log(sum + n, '> 101\n');
    break;
  }
}

console.log('somma:', sum);