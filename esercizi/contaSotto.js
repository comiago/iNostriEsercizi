function contaSotto(t) {
    if(!t)return 0;
    return t.sotto = 1 + contaSotto(t.sx) + contaSotto(t.dx);
}

let t = {val: 2, sotto: 0, sx: {val: 4, sotto: 0, sx: {val: 6, sotto: 0}, dx: {val: 6, sotto: 0, dx:{val: 8, sotto: 0}}}, dx: {val: 7, sotto: 0, sx: {val: 8, sotto: 0}}}

console.log(contaSotto(t))
console.log(t)