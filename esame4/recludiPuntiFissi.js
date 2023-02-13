function check(x, y){
    for(let i in x)
        if(!(i in y)) return false;
    for(let i in y)
        if(!(i in y)) return false;
    return true;
}

function recludi_punti_fissi(f) {
    function fun(a, n) {
        let i = 0;
        while (i < a.length && n != 0) {
            let x = f(a[i])
            if(check(a[i], x)){
                a.splice(i, 1);
                i--;
                n--;
            }
            i++;
        }
        return a;
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

console.log(
    recludi_punti_fissi(filtra_5)([
        { 2: true, 1: true },
        {},
        { 12: true, 2: true, 1: true },
        { 12: true, 1: true }
    ], 1));

// [
//     {},
//     {12:true, 2:true, 1:true},
//     {12:true, 1:true}
// ]