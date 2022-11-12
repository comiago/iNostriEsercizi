/*
Scrivere un programma che, data una temperatura in
Celsius dalla tastiera, calcola e mostra a video la
temperatura in Fahrenheit (F = C × 1.8 + 32)
*/

let c, f;

c = prompt('Temperature in celsius: '); // Prendo la temperatura in celsius

f = c * 1.8 + 32; // Converto in fahrenheit

console.log(`Temperature in fahrenheit: ${f}`);