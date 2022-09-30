/*
Scrivere un programma che legga due numeri e un
operatore tra +, -, * e / da tastiera e mostri a video il risultato
dell’operazione sui due numeri.
*/

let n1, n2, operator;

// Prendo le variabili
n1 = Number(prompt('First number: '));
n2 = Number(prompt('Second number: '));
operator = prompt('Operator: ');

// Controllo l'operatore e ne faccio l'operazione
switch(operator){
  case '+':
    console.log(n1 + n2);
    break;
  case '-':
    console.log(n1 - n2);
    break;
  case '*':
    console.log(n1 * n2);
    break;
  case '/':
    console.log(n1 / n2);
    break;
}