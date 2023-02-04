function rosa(s){
    let obj = {x: 0, y: 0}
    if(s.includes('N'))
        obj.y = 1;
    if(s.includes('S'))
        obj.y = -1;
    if(s.includes('W'))
        obj.x = -1;
    if(s.includes('E'))
        obj.x = 1;
    return obj;
}

console.log(rosa('NE'));
console.log(rosa('EN'));
console.log(rosa('S'));
console.log(rosa('NW'));