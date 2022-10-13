/*
Si scriva una funzione MoltiplicazioneEgizia(a, b), 
dove a e b sono due numeri naturali > 0

La funzione deve restituire il risultato
della moltiplicazione tra a e b usando solo le
seguenti operazioni: somma, modulo, divisione
per 2, moltiplicazione per 2
*/

function MoltiplicazioneEgizia(a, b){
    let r = 0;

    if (b % 2 != 0){
        b++
        r = -a;
    }
    
    for(let i = 0; i < b / 2; i++)r += a * 2;

    return r;
}

console.log(MoltiplicazioneEgizia(293, 541));