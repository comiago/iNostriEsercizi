function check_array(arr){
    if(arr.length <= 3) return true;
    let p1 = arr[0] * arr[arr.length - 1];
    let p2 = arr[1] * arr[arr.length - 2];
    if(p2 % p1 != 0) return false;
    return check_array(arr.slice(1, arr.length - 1));
}

console.log(check_array([]));