function inEquilibrio(t){
    if(!(t.sx && t.dx))return true;
    return (t.sx && t.val >= t.sx.val) && (t.dx && t.val <= t.dx.val) && inEquilibrio(t.sx) && inEquilibrio(t.dx);
}

console.log(inEquilibrio({val:8,sx:{val: 8},dx:{val:8}}))