function subSeq(e, a){
    if (a.length < e.length){
        return false;
    }
    let find = true;
    for (let i = 0; i < e.length; i++){
        if (e[i] != a[i]){
            a.splice(0, 1);
            find = false;
            return subSeq(e, a);
        }
    }
    if(find) return true;
}

console.log(subSeq([1,2],[4,7,2,1,2,4]))