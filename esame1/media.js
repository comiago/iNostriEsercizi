/*
Si definisca una funzione media(arr, a, b) che dato un array arr di n elementi ritorni la media sull'intervallo [a,b] se a <= b < n, altrimenti ritorni undefined.
*/

function media(arr, a, b){
    let sum = 0;
    if (a > b || b >= arr.length)
        return undefined;
    for (let i = a; i <= b; i++)
        sum += arr[i];
    return sum / (b - a + 1);
}

console.log(media([10, -3, undefined, 0.2], 1, 3))