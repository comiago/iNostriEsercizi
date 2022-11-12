/*
Una sequenza è detta palindroma se, invertendo l'ordine degli elementi, si ottiene nuovamente la sequenza originale. Una sequenza è detta bipalindroma se è costituita da due
sottosequenze, anche di lunghezze diverse, ciascuna delle quali è palindroma. Si noti che la sequenza vuota è palindroma, e dunque tutte le sequenze palindrome sono bipalindrome
in quanto composte dall'intera sequenza, seguita dalla sequenza vuota.

Per esempio, "ABBA" è una stringa palindroma; "" è una stringa palindroma, dunque "ABBA"+"" è una stringa bipalindroma.

D'altra parte, "ABABBABB" è bipalindroma, in quanto costituita da "ABA" e "BBABB", che sono entrambe palindrome, ma non è essa stessa palindroma, perché "ABABBABB"≠"BBABBABA".



Si scriva una funzione JavaScript bipalindroma(s) che ricevuta una stringa s, restituisca true se la stringa è bipalindroma, false altrimenti.
*/

function palindromo(str){
  let i = 0, j = str.length - 1;
  while (i <= j) {
    if(str[i] != str[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function bipalindroma(str){
  let i = 0;
  while (i <= str.length){
    if(palindromo(str.substring(0, i)) && palindromo(str.substring(i, str.length))) return true;
    i++;
  }
  return false;
}

console.log(bipalindroma('ABABBABB'))