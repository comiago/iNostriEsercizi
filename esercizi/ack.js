/*
Si scriva una funzione JavaScript ack(p,q) (con p e q numeri naturali) così definita: è uguale a: q+1 se p vale 0; a ack(p-1, 1) se q vale 0; e ack(p-1, ack(p,q-1)) altrimenti.
*/

function ack(p, q) {
    if (p == 0) return q + 1;
    else if (q == 0) return ack(p - 1, 1);
    else return ack(p - 1, ack(p, q - 1));
}