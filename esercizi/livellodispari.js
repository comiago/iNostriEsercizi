function livelloDispari(t, l = 0){
    if(!t) return true;
    return (t.val % 2 != 0 && l % 2 == 0 || t.val % 2 == 0 && l % 2 != 0) && livelloDispari(t.sx, l + 1) && livelloDispari(t.dx, l + 1);
}

let Q = {val: 2, sx: {val: 4, sx: {val: 6}, dx: {val: 6, dx:{val: 8}}}, dx: {val: 7, sx: {val: 8}}};
console.log(livelloDispari(Q));