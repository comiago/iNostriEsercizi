function selectionSort(a){
    let m, t;
    for (let i = 0; i < a.length; i++) {
        m = i;
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < a[m]) m = j;
        }
        t = a[m];
        a[m] = a[i];
        a[i] = t;
    }
    return a;
}

console.log(selectionSort([12,132,9,25,3,41,2]))