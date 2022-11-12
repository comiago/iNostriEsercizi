function innestaSottoAlberi(t, st){
    if (!t) return;
    if (t.sx && t.sx.val < 0)
        t.sx = st;
    else innestaSottoAlberi(t.sx, st);
    if (t.dx && t.dx.val < 0)
        t.dx = st;
    else innestaSottoAlberi(t.dx, st);
}

let t={val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9}}}, dx:{val:-3, sx:{val:-8},dx:{val:7}}}
let st={val:1, sx:{val:1}, dx:{val:1}}

innestaSottoAlberi(t, st);
console.log(t, st)