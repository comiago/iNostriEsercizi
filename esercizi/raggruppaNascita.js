function raggruppa_nascita(persone){
    let obj = {};
    for (let i of persone){
        let city = i.luogonascita;
        if(!(city in obj))
            obj[city] = [];
        obj[city].push(i);
    }
    return obj;
}

var persone = [
    {'nome': 'Leonardo da Vinci', 'annonascita': 1452, 'luogonascita': 'Vinci'},
    {'nome': 'Pietro del Donzello', 'annonascita': 1452, 'luogonascita': 'Firenze'},
    {'nome': 'Davide Ghirlandaio', 'annonascita': 1452, 'luogonascita': 'Firenze'},
    {'nome': 'Leonardo Fibonacci', 'annonascita': 1170, 'luogonascita': 'Pisa'}
  ]

console.log(raggruppa_nascita(persone))

//   {
//     Vinci: [
//       {
//         nome: 'Leonardo da Vinci',
//         annonascita: 1452,
//         luogonascita: 'Vinci'
//       }
//     ],
//     Firenze: [
//       {
//         nome: 'Pietro del Donzello',
//         annonascita: 1452,
//         luogonascita: 'Firenze'
//       },
//       {
//         nome: 'Davide Ghirlandaio',
//         annonascita: 1452,
//         luogonascita: 'Firenze'
//       }
//     ],
//     Pisa: [
//       {
//         nome: 'Leonardo Fibonacci',
//         annonascita: 1170,
//         luogonascita: 'Pisa'
//       }
//     ]
//   }