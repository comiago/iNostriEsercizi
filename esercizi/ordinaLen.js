/*
Si scriva una funzione ordinaLen(a) che, dato un array di stringhe a, restituisca un array contenente le stesse stringhe, ordinate secondo
la loro lunghezza (dalla più breve alla più lunga); a parità di lunghezza, andranno ordinate secondo l’ordine alfabetico.
*/

function ordinaLen(a){
    for (let i = 1; i < a.length; i++) {
        let key = a[i];
        let j = i - 1;
        while (j > -1 && a[j].length > key.length || a[j] > key) {
            a[j+1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
    return a;
}