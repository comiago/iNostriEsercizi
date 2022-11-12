let a = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function conversion(n){
    let result = [], q, r;
    do{
        q = Math.floor(n / 36);
        r = n % 36;
        result.push(a[r]);
        n = q;
    }while(q > 0);

    return result.reverse();
}

console.log(conversion(51271));