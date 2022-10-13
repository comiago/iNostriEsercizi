/*
Si scriva una funzione penultimo(a) che, dato un array di stringhe a, restituisca la penultima stringa secondo l’ordine
alfabetico fra quelle presenti nell’array, oppure undefined se non esiste una penultima.
*/

function sort(a){
    for (let i = 1; i < a.length; i++) {
        let key = a[i];
        let j = i - 1;
        while (j > -1 && a[j] > key) {
            a[j+1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
    return a;
}

function penultimo(a){
    return sort(a)[a.length - 2];
}

console.log(penultimo(['zucca']))