t={val:20, sx:{val:19, sx:{val:8}, dx:{val:-7, sx:{val:9} } }, dx:{val:-3, sx:{val:-8},dx:{val:7}}}
// function tagliaAlberi(t){
//     if(t==undefined) return {};
//     let nt={}
//     if(t.val>=0){   
//         nt.val= t.val
//         nt.sx=tagliaAlberi(t.sx)
//         nt.dx=tagliaAlberi(t.dx)
//     }
// return nt
  
// }
// console.log(tagliaAlberi(t))


function tagliaAlberi(t){
    if(t==undefined) return 0
    
    if(t.val<0){   
        delete t.val
        delete t.sx
        delete t.dx
    }else{
        tagliaAlberi(t.sx)
        tagliaAlberi(t.dx)
    }
  
}