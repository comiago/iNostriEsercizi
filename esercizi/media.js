/*
Si scriva un programma che legga da tastiera 10 interi e stampi la media aritmetica
di tutti i valori diversi da zero e di segno uguale all’ultimo valore della sequenza.
*/

let psum = 0, nsum = 0, pcon = 0, ncon = 0, n, prev;

while (pcon + ncon < 10){
  n = Number(prompt('N: '));
  if (n != 0){
    if (n > 0){
      psum += n;
      pcon++;
    } else if (n < 0){
      ncon++;
      nsum += n;
    }
    prev = n;
  }
}

if (n > 0 || prev > 0)
  console.log(psum / pcon);
else if (n < 0 || prev < 0)
  console.log(nsum / ncon);