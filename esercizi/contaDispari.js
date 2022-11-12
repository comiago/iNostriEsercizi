function contaDispari(t){
    if(!t)return 0;
    return (t.val % 2 != 0) + contaDispari(t.sx) + contaDispari(t.dx);
}

console.log(contaDispari({val:8,sx:{val: -4, sx: {val: 32}, dx: {val:12, sx: {val: 2, dx:{val:-2}, sx:{val: 812}}}}, dx:{val: 112, dx: {val: 32}, sx: {val:82, sx: {val: 632}}}}))