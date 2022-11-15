function verifica(t){
    let sx;
    let dx;
    
    if(t.sx && t.val >= t.sx.val)
        sx = verifica(t.sx)
    else if(t.sx && t.val < t.sx.val)
        sx = false
    else
        sx = true

    if(t.dx && t.val >= t.dx.val)
        dx = verifica(t.dx)
    else if(t.dx && t.val < t.dx.val)
        dx = false
    else
        dx = true
    
    return sx && dx;
}

function verifica2(t){
    if(!(t.sx && t.dx)) return true;
    return ((t.sx && t.val >= t.sx.val) && (t.dx && t.val >= t.dx.val)) && verifica2(t.sx) && verifica2(t.dx)
}

Q = {val: 9, sx: {val: 9, sx: {val: 6}, dx: {val: 7, dx:{val: 14}}}, dx: {val: 9, sx: {val: 7}}}
console.log(verifica(Q))