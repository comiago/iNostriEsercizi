/*
Si scriva una funzione produttoria(a, b) che, dati come argomenti due interi positivi a e b, con a <= b, restituisca il prodotto di tutti gli interi fra a e b, estremi compresi.
*/

function produttoria(a, b) {
    let r = 1;
    for (let i = a; i <= b; i++)r *= i;
    return r;
}

console.log(produttoria(10,11))