/*
Scrivere un programma che stampa la tabella di
verità per la funzione Booleana ‘OR’
*/

let table = [], values = ['a', 'b'];

// Creo la tabella con tutte le combinazioni true e false per tutte le variabili in values
for(let i = (Math.pow(2, values.length) - 1); i >= 0; i--){
  let row = []
  for(let j = (values.length - 1); j >= 0; j--){
    row[j] = (i & Math.pow(2,j)) ? true : false;
  }
  table.push(row);
}

console.log('Combinations');
table.forEach((e) => {
  console.log(e);
});

// Faccio l'or logico su tutti gli elementi della tabella
console.log('\n\nOr truth table');
table.forEach((e) => {
  console.log(e.some((elem) => !!elem)); // OR
  // console.log(e.every((elem) => !!elem)); // AND
});