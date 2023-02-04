function intersecaT(t1, t2){
    for(let i = 0; i < t1.length; i++)
        for(let j = 0; j < t2.length; j++)
            if(t1[i].x == t2[j].x && t1[i].y == t2[j].y)
                return true;
    return false;
}

let t1 = [{x:0,y:2},{x:2,y:-4},{x:-2,y:-2}];
let t2 = [{x:5,y:-2},{x:5,y:0},{x:0,y:3}];

console.log(intersecaT(t1, t2));