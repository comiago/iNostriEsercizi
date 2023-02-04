function flattenTree(tree) {
    if(tree.sx == null && tree.dx == null) return [tree.val];
    let arr = [];
    if(tree.sx){
        arr.concat(flattenTree(tree.sx));
    }
    console.log(arr)
    arr.push(tree.val);
    console.log(arr)
    if(tree.dx){
        arr.concat(flattenTree(tree.dx));
    }
    console.log(arr)
    return arr;
}

let albero = {
    val: 2,
    sx: {
        val: 1,
        sx: {
            val: 0,
            sx: null,
            dx: null
        },
        dx: null
    },
    dx: {
        val: 3,
        sx: null,
        dx: {
            val: 4,
            sx: null,
            dx: null
        }
    }
}

console.log('\n', flattenTree(albero)); // [0, 1, 2, 3, 4]