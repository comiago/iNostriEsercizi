function vocali(s){
    let obj = {ant: 0, cent: 0, post: 0};
    for(let i of s){
        if(i.toLowerCase() == 'e' || i.toLowerCase() == 'i'){
            obj.ant++;
        } else if(i.toLowerCase() == 'a'){
            obj.cent++;
        } else if(i.toLowerCase() == 'o' || i.toLowerCase() == 'u'){
            obj.post++;
        }
    }
    return obj;
}

console.log(vocali("2+2"));