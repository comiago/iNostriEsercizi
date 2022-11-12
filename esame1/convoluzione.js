function convoluzione(arr, windows_size) {
    let c = [];
    for (let i = 0; i < arr.length; i++){
        let s = 0;
        for (let j = Math.max(0, i - windows_size); j <= Math.min(arr.length - 1, i + windows_size); j++){
            console.log(j, i, i - windows_size, i + windows_size);
            s += arr[j];
        }
        c.push(s);
    }
    return c;
}

console.log(convoluzione([1, 2, 3, 4], 1))