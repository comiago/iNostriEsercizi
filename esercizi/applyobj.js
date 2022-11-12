/*
Si scriva una funzione applyobj(o, f) che, dato un oggetto o e una funzione f, restituisca un oggetto o' con le stesse chiavi di o, e in cui il valore di ogni chiave k sia dato
dall’applicazione di f al valore della chiave k in o, ovvero: o'.k == f(o, k).
*/

function applyobj(o, f) {
    let obj = {};
    for (let i in o){
        obj[i] = f(o[i]);
    }
    return obj;
}

console.log(applyobj({}, e=>e+1))