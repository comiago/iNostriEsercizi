/*
Scrivere una funzione trova(a, x), con a un array di numeri e x un numero, che restituisce la posizione della prima occorrenza di x in a. 
Se  non occorre in a la funzione restituisce -1.
*/

// prima soluzione
function trova(a, x){
    return a.indexOf(x);
}

// seconda soluzione
function trova2(a, x){
    let i = 0;
    while (i < a.length){
        if (a[i] == x) return i;
        i++;
    }
    return -1
}