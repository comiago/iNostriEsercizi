function applicaF(p, d){
    let f = (a) => {
        let newArr = [];
        for (let i = 0; i < a.length; i++)
            if (i % 2 == 0)
                newArr.push(p(a[i]))
            else
                newArr.push(d(a[i]))
        return newArr
    }
    return f;
}