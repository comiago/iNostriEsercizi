function fsort(a, b) {
    if (a.probVincita < b.probVincita) return -1;
    else if (a.probVincita > b.probVincita) return 1;
    else if (a.squadraCasa < b.squadraCasa) return 1;
    else if (a.squadraCasa > b.squadraCasa) return -1;
}

function pronostico(partite) {
    let arr = [];
    for (let i of partite) {
        let probVincita;
        if (i.totalePartite == 0) probVincita = 0
        else probVincita = Math.round((i.vittorieCasa / i.totalePartite) * 100) / 100;
        i['probVincita'] = probVincita;
        arr.push(i);
    }
    return arr.sort(fsort);
}

var partite = [
    {
        "squadraCasa": "Monteriggioni",
        "squadraOspite": "Poggibonsi",
        "vittorieCasa": 2,
        "totalePartite": 15
    },
    {
        "squadraCasa": "Monteriggioni",
        "squadraOspite": "Massa",
        "vittorieCasa": 7,
        "totalePartite": 8
    },
    {
        "squadraCasa": "Massa",
        "squadraOspite": "Carrara",
        "vittorieCasa": 9,
        "totalePartite": 10
    },
    {
        "squadraCasa": "Poggibonsi",
        "squadraOspite": "Monteriggioni",
        "vittorieCasa": 12,
        "totalePartite": 13
    },
]

/*[
    {
        squadraCasa: 'Poggibonsi',
        squadraOspite: 'Monteriggioni',
        vittorieCasa: 12,
        totalePartite: 13,
        probVincita: 0.92
    },
    {
        squadraCasa: 'Massa',
        squadraOspite: 'Carrara',
        vittorieCasa: 9,
        totalePartite: 10,
        probVincita: 0.9
    },
    {
        squadraCasa: 'Monteriggioni',
        squadraOspite: 'Massa',
        vittorieCasa: 7,
        totalePartite: 8,
        probVincita: 0.88
    },
    {
        squadraCasa: 'Monteriggioni',
        squadraOspite: 'Poggibonsi',
        vittorieCasa: 2,
        totalePartite: 15,
        probVincita: 0.13
    }
]*/

console.log(pronostico(partite));