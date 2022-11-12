/*
Un numero naturale n si dice perfetto se è uguale alla somma dei propri divisori propri (ovvero, tutti i suoi divisori positivi escluso ).
Si scriva una funzione perfetto(n) che, dato un numero naturale n, restituisca true se n è perfetto, false altrimenti.
*/

function perfetto(n){
    let sum = 0;
    for(let i = 1; i <= n / 2; i++){
        if (n % i == 0)sum += i;
    }
    return n == sum;
}

console.log(perfetto(10))