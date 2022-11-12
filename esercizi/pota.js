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
console.log(pota(t, 7))