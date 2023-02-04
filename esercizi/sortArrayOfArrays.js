function fsort(a, b){
    let len = a.length - b.length;
    if(len == 0){
        for(let i = 0; i < a.length; i++) {
            let d = a[i] - b[i];
            if(d != 0) {
                return d;
            }
        }
    }
    return len;
}

function ordina(a){
    for(let i in a){
        a[i].sort((a, b) => a - b);
    }
    a.sort(fsort);
}

let a = [];
for(let i = 0; i < Math.floor(Math.random() * (10 - 4) + 4); i++){
    let x = [];
    for(let j = 0; j < Math.floor(Math.random() * (20 - 4) + 4); j++){
        x.push(Math.floor(Math.random() * 1000));
    }
    a.push(x);
}
ordina(a);
console.log(a);