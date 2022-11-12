/*
Si scriva una funzione fattori(n) che, dato come argomento un intero positivo n, restituisca un array contenente tutte le coppie di divisori di n,
incluse le coppie (1,n) e (n,1), in ordine di primo elemento crescente. Ciascuna coppia è a sua volta rappresentata come un array.
*/

function fattori(n){
    let d = [], i = 1;
    while(i <= n){
        if (n % i == 0){
            d.push([i, n / i]);
        }
        i++;
    }
    return d;
}

console.log(fattori(10))