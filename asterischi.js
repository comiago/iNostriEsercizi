/*
Si scriva un programma che dato un intero n stampi n asterischi sulla prima
linea, n − 2 asterischi sulla seconda linea, n − 4 sulla terza e così via, fino ad arrivare a
stampare uno o due asterischi sull’ultima linea
*/

let n, output;

// Prendo la variabile
n = prompt('N: ');

while(n > 0){
  output = '';
  for (let i = n; i > 0; i--)
    output += ('*');
  console.log(output);
  n -= 2;
}