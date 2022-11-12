/*
Scrivere una funzione isSorted(a), con a un array di numeri. La funzione restituisce true se l'array è ordinato in senso strettamente crescente, e false altrimenti.
*/

function isSorted(a) {
    for (let i = 0; i < a.length - 1; i++)
        if (a[i] >= a[i + 1])
            return false;
    return true;
}