function deep(t) {
    if(!t) return undefined;
    if(!t.sx && !t.dx) return t.val;

    let sx = deep(t.sx);
    let dx = deep(t.dx);

    return (sx) ? sx : dx;
}

function deepLuca(T){
    if(!T)
        return undefined
    maxDeep=-1
    maxVal=T.val
    function run(t,liv){
        if(!t)
            return undefined
        if(liv > maxDeep){
            maxVal=t.val
            maxDeep=liv
        }
        sx=run(t.sx,liv+1)
        dx=run(t.dx,liv+1)
    }
    run(T,0)
    return maxVal
}

var T=
{   val: 5,
    sx: {   val: 7,
            sx: {   val: 'c' },
            dx: {   val: 5,
                    sx: {val: 10}
                }
        },
    dx: {   val: 'a',
            sx: {   val: 'b',
                    dx: {val: 7}
                },
            dx: {   val: 1}
        }
}

console.log(deep(T))