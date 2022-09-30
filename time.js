/*
Scrivere un programma che, dato un numero di
secondi dalla tastiera, calcola e mostra a video il
numero di ore, minuti e secondi inclusi.
*/

let h, m, s;
const hs = 60 * 60; // Quanti secondi ci sono in un'ora
const ms = 60; // Quanti secondi ci sono in un minuto

s = prompt('s: '); // Prendo i secondi

// Calcolo delle ore
h = (s - (s % hs)) / hs;
s -= h * hs;

// Calcolo dei minuti
m = (s - (s % ms)) / ms;
s -= m * ms;

console.log(`${h}h:${m}m:${s}s`);