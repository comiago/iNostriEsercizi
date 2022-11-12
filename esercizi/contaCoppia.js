function contaCoppia(t, val1, val2){
    if (t == undefined) return 0;
    return ((t.sx && t.sx.val == val1 && t.dx && t.dx.val == val2) ? 1 : 0) + contaCoppia(t.sx, val1, val2) + contaCoppia(t.dx, val1, val2);
}

console.log(contaCoppia({val:7,sx:{val: 4, sx: {val: 3}, dx: {val:12, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}, dx:{val: 11, dx: {val: 3}, sx: {val:8, sx: {val: 6}}}},4,12))