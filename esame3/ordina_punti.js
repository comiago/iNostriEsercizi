function distanza(lat1,lon1,lat2,lon2){
    return Math.round(Math.sqrt(Math.pow((lat2-lat1),2) + Math.pow((lon2-lon1),2)))
}

function s(a, b){
    let d = a.distanza - b.distanza
    if(d == 0){
        return (a.nome < b.nome) ? -1 : 1;
    }
    return d;
}

function ordina_punti(arr, lat, lon){
    let a = [...arr];
    for(let i of a){
        i['distanza'] = distanza(lat, lon, i.latitudine, i.longitudine);
    }
    a.sort(s);
    return a;
}

let B = [
    {"ID":"n10","nome":"torre","latitudine":3,"longitudine":3},
    {"ID":"n5","nome":"cattedrale","latitudine":3,"longitudine":3},
    {"ID":"n8","nome":"battistero","latitudine":2,"longitudine":2}
]

console.log(ordina_punti(B,0,0));