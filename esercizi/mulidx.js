/*
Si scriva una funzione mulidx(a) che, dato un array a con elementi qualunque, restituisca un nuovo array b, contenente (nello stesso ordine) soltanto gli elementi numerici
di a che sono un multiplo del proprio indice, e gli elementi stringa di a la cui lunghezza è un multiplo del proprio indice.
*/

function mulidx(a){
    let b = [];
    for(let i = 0; i < a.length; i++) {
        if (typeof a[i] === 'number' && a[i] % i == 0 || a[i] == 0)b.push(a[i]);
        else if (typeof a[i] === 'string' && a[i].length % i == 0 || a[i].length == 0)b.push(a[i]);
    }
    return b;
}

console.log(mulidx(["",4,[true],"Grande Giove",7,10]))