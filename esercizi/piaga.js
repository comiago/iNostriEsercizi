function piaga(t){
    let count = 0;
    for(let i in t.figli){
        if(i == 0){
            count += ((t.figli[i].figli) ? t.figli[i].figli.length - 1 : 0) + 1 + piaga(t.figli[i]);
            t.figli.shift();
            i--;
        } else{
            count += piaga(t.figli[i]);
        }
    }
    return count;
}

var T={
    val: 1,
    figli: [
        {val: 2, figli: [{val: 3}, {val: 4}]},
        {val: 5},
        {val: 6, figli: [ {val: 7}]},
        {val: 8},
        {val: 9, figli: [{val: 10}, {val: 11}]}
    ]
}

console.log(piaga(T));