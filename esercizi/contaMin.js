function contaMin(T){
    if(!T) return Infinity;
    return T['piccolo'] = Math.min(T.val, contaMin(T.sx), contaMin(T.dx));
}

let t = {val: 2, piccolo: Infinity, sx: {val: 4, piccolo: Infinity, sx: {val: 6, piccolo: Infinity}, dx: {val: 6, piccolo: Infinity, dx:{val: 8, piccolo: Infinity}}}, dx: {val: 7, piccolo: Infinity, sx: {val: 8, piccolo: Infinity}}};
console.log(contaMin(t));