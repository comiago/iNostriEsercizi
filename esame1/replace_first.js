/*
Si definisca una funzione replace_first(arr, target, replacement, max_rep) che dato un array arr ritorni un array in cui le prime max_rep occorrenze di target sono sostituite
dall'elemento replacement. Se max_rep = -1 la funzione sostituisce tutte le occorrenze.
*/

function replace_first(arr, target, replacement, max_rep){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (max_rep == -1 && arr[i] == target)
            newArr.push(replacement);
        else if (arr[i] == target && max_rep > 0){
            newArr.push(replacement);
            max_rep--;
        } else
            newArr.push(arr[i]);
    }
    return newArr;
}

console.log(replace_first([9, 2, 3, 4, 7, 7, 1], 7, 2, -1))