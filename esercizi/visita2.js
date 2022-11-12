function visita2(t, f){
    if (!t)return;
    let nt = {};
    nt["val"] = f(t.val);
    nt["sx"] = visita2(t.sx, f);
    nt["dx"] = visita2(t.dx, f);
    return nt;
}

let t = {
    val: 1,
    sx: {
        val: 8,
        sx: {val:7},
        dx: {val: 1}
    },
    dx: {
        val: 3,
        sx: {val: 5}
    }
}

console.log(visita2(t, x=>x%2))