function punto_fisso(f){
    function fun(n){
        let x = f(n);
        for(let i in n)
            if(!(i in x)) return false;
        for(let i in x)
            if(!(i in n)) return false;
        return true;
    }
    return fun;
}

function filtra_5(x) {
    let new_x = {}
    for (let v in x) {
        if (parseInt(v) < 5) new_x[v] = true
    }
    return new_x
}
console.log(punto_fisso(filtra_5)(({12:true, 2:true, 1:true})));