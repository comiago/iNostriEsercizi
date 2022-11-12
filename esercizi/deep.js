function deep(t) {
    if(t == undefined) return undefined
    if(t.sx == undefined && t.dx == undefined) return t.val

    sx = deep(t.sx)
    dx = deep(t.dx)

    if(sx) return sx
    return dx
}

let t = {val: 1,
    sx: {val: 5, sx: {val: 9}},
    dx: {
        val: 3,
        sx: {val: 2,
            sx: {
                val: 4, 
                sx: {val: 8},
                dx: {val: 6, dx: {val: 'c'}}
            }
        },
        dx: {val: 7}
    }
}

console.log(deep(t))