/*
Un gancio è una sequenza (array) di 3 numeri avente la prima e l'ultima cifra uguali, e la cifra centrale differente. Se la cifra centrale dell'array è più piccola rispetto alle
altre due, abbiamo un gancio ascendente; altrimenti, un gancio discendente. Ad esempio:

[3, 7, 3]: discendente

[1, -1, 1]: ascendente

Si scriva una funzione gancio(a), con a un array di numeri, che restituisca un oggetto avente, nell'ordine, quattro proprietà: num, il cui valore è il numero di ganci totali
presenti in a; asc, il cui valore è il numero di ganci ascendenti presenti in a; des, il numero di ganci discendenti presenti in a; gan, un array contenente tutte le sequenze che
sono ganci, nell'ordine in cui compaiono in a
*/

function gancio(a){
    let ganci = {num : 0, asc : 0, des : 0, gan : []}
    for (let i = 1; i < a.length; i++) {
        if (a[i - 1] == a[i + 1] && a[i - 1] != a[i]){
            ganci.num++;
            if (a[i] < a[i + 1]) ganci.asc++;
            else ganci.des++;
            ganci.gan.push([a[i - 1], a[i], a[i + 1]]);
        }
    }
    return ganci;
}

console.log(gancio([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));