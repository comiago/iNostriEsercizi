function presente(concessionaria, auto){
    for(let i of concessionaria){
        let flag = true
        for(let j in auto){
            if(i[j] == auto[j]) flag = true;
            else{
                flag = false;
                break;
            }
        }
        if(flag) return true;
    }
    return false
}

function disponibili(concessionaria){
    let arr = [];
    for(let i of concessionaria){
        if(i['Disponibile']) arr.push(i);
    }
    return arr;
}

function filtra_per_anno(concessionaria, anno, operatore){
    let arr = [];
    switch(operatore){
        case '<':
            for(let i of concessionaria)
                if(i['Anno'] < anno) arr.push(i);
            break;
        case '>':
            for(let i of concessionaria)
                if(i['Anno'] > anno) arr.push(i);
            break;
        case '==':
            for(let i of concessionaria)
                if(i['Anno'] == anno) arr.push(i);
            break;
        default:
            return undefined;
    }
    return arr;
}

var macchina1 = {"Telaio": "12w34e", "Anno": 2009, "Prezzo": 17600, "Disponibile": false}
var macchina2 = {"Telaio": "46m87j", "Anno": 2019, "Prezzo": 9700, "Disponibile": true}
var macchina3 = {"Telaio": "32m12g", "Anno": 2020, "Prezzo": 26000, "Disponibile": true}
var macchina4 = {"Telaio": "09j76t", "Anno": 2022, "Prezzo": 76550, "Disponibile": true}
var macchina5 = {"Telaio": "45t67y", "Anno": 2021, "Prezzo": 12566, "Disponibile": false}
var concessionaria = [macchina1, macchina2, macchina3, macchina4]

console.log(presente(concessionaria, macchina1)); // true
console.log(presente(concessionaria, macchina5)); // false
console.log(disponibili(concessionaria)); // [macchina2, macchina3, macchina4]
console.log(filtra_per_anno(concessionaria, 2010, "<")); // [macchina1]