function pota(t, k){
    if (!t)return;
    let nt = {};
    if (t.val <= k){
        nt["val"] = t.val;
        nt["sx"] = pota(t.sx, k);
        nt["dx"] = pota(t.dx, k);
    }
    return nt;
}

let t={val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9}}}, dx:{val:-3, sx:{val:-8},dx:{val:7}}}
console.log(pota(t, 7))