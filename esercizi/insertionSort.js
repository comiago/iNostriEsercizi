function insertionSort(a){
    for (let i = 1; i < a.length; i++) {
        let key = a[i];
        let j = i - 1;
        while (j > -1 && a[j] > key) {
            a[j+1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
    return a;
}

console.log(insertionSort([1,1,1,1,1]))