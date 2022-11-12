/*
Si scriva un programma che legga da tastiera 10 interi e stampi i primi 2 minimi.
*/


let m = Infinity, m1 = Infinity, n;

for (let i = 0; i < 10; i++){
  n = Number(prompt('N: '));
  if (n < m){
    m1 = m;
    m = n;
  } else if (n < m1){
    m1 = n;
  }
}

console.log(m, m1);