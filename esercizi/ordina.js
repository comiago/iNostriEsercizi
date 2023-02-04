function ordina(a){
    let arr = [];
    
    return arr;
}

function ordinaInPlace(a){
    for(let i = 0; i < a.length - 1; i++)
        for (let j = i + 1; j < a.length; j++) {
            if(a[i] == a[j]){
                a.splice(j, 1);
                j--;i--
            } else if(a[i] > a[j])
                [a[i], a[j]] = [a[j], a[i]];
        }
    return a;
}

console.log(ordina([1,1,1,1,1]));
