function pota2(t, k){
    if(!t) return 0 
    count = 1
    if(t.sx && t.sx.val>k){
        count+=pota2(t.sx, k)
        delete t.sx
    }
    if(t.dx && t.dx.val>k){
        count+=pota2(t.dx, k)
        delete t.dx
    }
    return count
}
//T={val:1, sx:{val:8, sx:{val:7, dx: {val:9}}, dx:{val:1}}, dx:{val:3, dx:{val:5}}}
//console.log(pota2(T,4), T)

function innestaSottoAlberi(t,st){
    if(t==undefined) return undefined
    if(t.val<0){
        t.val=st.val
        t.sx=st.sx
        t.dx=st.dx
    }
    innestaSottoAlberi(t.sx,st)
    innestaSottoAlberi(t.dx,st)
    return t
}
//let t={val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9}}}, dx:{val:-3, sx:{val:-8},dx:{val:7}}}
let st={val:1, sx:{val:1}, dx:{val:1}}

//console.log(innestaSottoAlberi(t, st))


function visitaLivelli(t){
    if(!t) return undefined
    if(t.sx)
        console.log(t.sx.val)
    if(t.dx)
        console.log(t.dx.val)
    visitaLivelli(t.sx)
    visitaLivelli(t.dx)
}

//visitaLivelli(T)

function tagliaAlberi(t){
    if(!t) return undefined
    if(t.val<0){
        delete t.val
        delete t.sx
        delete t.dx
    }else{
        tagliaAlberi(t.sx)
        tagliaAlberi(t.dx)
    }
}
//t={val:20, sx:{val:19, sx:{val:8}, dx:{val:7, sx:{val:9} } }, dx:{val:-3, sx:{val:-8},dx:{val:7}}}
//tagliaAlberi(t)
//console.log(t)

function inEquilibrio(t){
    if(!t) return false
    if(!(t.sx && t.dx)) return true
    return ((t.sx && t.val>=t.sx.val) && (t.dx && t.val<=t.dx.val)) &&  inEquilibrio(t.dx) && inEquilibrio(t.sx)
}
//console.log(inEquilibrio({val:8,sx:{val: 8},dx:{val:8}}))


function trovaPadre(t,n){
    for(let i in t.figli){
        if(isEqual(t.figli[i],n))
            return t.val
        trovaPadre(t.figli[i],n)
    }
}
//T={val:'T', figli:[{val:'p', figli:[{val:3},{val:'n'}]}, {val:1}, {val:2, figli:[{val:4}]}]}
//console.log(trovaPadre(T,{val:'n'}))
//console.log()


let count = 0;
function pota2(t,k){
  if(!t) return 0;
  if(t.val > k){
    delete t.val;
    count ++;
    if(t.sx){
      delete t.sx;
      count ++;
    }
    if(t.dx){
      delete t.dx;
      count ++;
    }
  } 
  pota2(t.sx,k);
  pota2(t.dx,k);
  return count;
}


function bisect(f,a,b){
    incr = 0.0001
    for(var i = a; i<=b; i+=0.000001){
        if(-incr<=f(i) && f(i)<=incr){
            return i
        }
    }
}


function applyobj(o,f){
    ris={}
    for(let i in o){
        ris[i]=f(o[i]);
    }
    return ris
}
//console.log(applyobj({}, e=>e+1))

function ordinato(a){
    if(a.length <= 1) return true;
    return (a[0]<a[1]) && ordinato(a.splice(1))
}
let a = [2,5,7,92,24]
let arr=[1,2,3,4,5,7,9];
console.log(ordinato(a));

//console.log(arr.splice(1));