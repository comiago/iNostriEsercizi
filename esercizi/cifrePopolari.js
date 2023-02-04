function cifrepopolari(n){
    let obj = {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
    let sn = n.toString();
    for(let i of sn){
        if(i in obj)
        obj[i]++;
    }
    let min = 0, max = 0
    for(let i = 0; i < 10; i++){
        
    }
    return obj;
}

console.log(cifrepopolari(3.1415926535));

// {5: 3, 0: 0}