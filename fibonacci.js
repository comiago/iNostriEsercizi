/*
Si scriva una funzione iterativa fibonacci(n) che calcola e restituisce l'n-esimo numero della serie di Fibonacci. Si provi a realizzare una funzione che utilizzi spazio costante.
*/

function fibonacci(n) {
    let n1 = 1, n2 = 1;

    for (let i = 2; i < n; i++) {
        n2 = n1 + n2;
        n1 = n2 - n1;
    }

    return n2;
}

console.log(fibonacci(0));