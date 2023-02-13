function taglia_nodi_interni(t, m) {
    if(t && t.figli){
        for(let i = t.figli.length - 1; i >= 0; i--) {
            if (t.figli[i].figli && t.figli[i].figli.length < m && t.figli[i].figli.length != 0) 
                t.figli.splice(i, 1);
            else
                taglia_nodi_interni(t.figli[i], m);
        }
    }
}

var T0 = {};

// {val: 0, figli:[]}

console.log(taglia_nodi_interni(T0, 3));