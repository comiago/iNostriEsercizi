combinations = []

function combination(arr, data, start, end, index, r){
    if (index == r){
        e = []
        for (let j = 0; j < r; j++)e.push(data[j])
        combinations.push(e)
        return
    }

    for(let i = start; i <= end && end - i + 1 >= r - index; i++){
        data[index] = arr[i];
        combination(arr, data, i+1, end, index+1, r);
    }
}

a = [1,2,3,4]
n = a.length
data = []
for (let r = 0; r <= n; r++)combination(a, data, 0, n - 1, 0, r);
console.log(combinations)