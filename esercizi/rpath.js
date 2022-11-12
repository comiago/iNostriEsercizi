function rpath(t, v, l = []) {
    if(t == undefined) return undefined        
    for(let i in t.figli){
        if(rpath(t.figli[i], v, l)){
            l.push(t.val)
            break;
        }
    }
    if(t.val === v){
        l.push(t.val)
    }
    return (l.length == 0) ? undefined : l;
}

var n8={val: 8},
    n12={val: 12, figli: [n8]},
    n5={val: 5, figli: [n12]},
    n2={val: 2},
    n9={val: 9},
    n1={val: 1},
    n0={val: 0, figli: [n9,n1]},
    n4={val: "4"},
    n7={val: 7, figli: [n0,n4]},
    n3={val: 3, figli: [n5,n2,n7]},
    T=n3

console.log(rpath(t, 9))