/*
Scriviamo un programma che risolve un’equazione di primo
grado
○ a*x+b=c ; x=?
○ a, b, c sono l’input del programma
○ x è l’output
*/

let a, b, c;

// Prendo le variabili
a = prompt('a: ');
b = prompt('b: ');
c = prompt('c: ');

c -= b; // "Porto" b al secondo membro e lo sommo a c 

// Se a è diverso da 1 divido entrambi i membri per a avendo così il valore di x
// Se non è una divisione intera la scrivo sottoforma di frazione
if(a != 1){
  if(c % a == 0){
    c /= a;
  } else{
    c = c + '/' + a;
  }
}

console.log('x =', c);