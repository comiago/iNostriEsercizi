/*
Si scriva una funzione firma(s) che, data una stringa s, restituisca un intero positivo k calcolato come segue: si immagini di sostituire ogni vocale (maiuscola o minuscola) o 
spazio in s con 1, e qualunque altro carattere con 0. Si consideri poi la stringa risultante come un numero binario, e sia k il suo valore.
*/

function firma(s){
    let n = 0, regex = /[aeiou\s]/i;
    for (let i = 0; i < s.length; i++)
        if(regex.test(s[i]))
            n += Math.pow(2, s.length - 1 - i);
    return n;
}

console.log(firma('Vincenzo Gervasi'));