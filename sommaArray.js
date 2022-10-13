/*
Si scriva una funzione ricorsiva sommaArray(a) che, dato come argomento un array di interi, restituisca la somma dei suoi elementi.
*/

function sommaArray(a) {
    if (a.length == 1) return a[0];
    else return a[0] + sommaArray(a.slice(1));
}

console.log(sommaArray([2,3,7,9]))