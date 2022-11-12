function visit(t){
    console.log(t.val);
    for(let i in t.figli) {
        visit(t.figli[i]);
    }
}

function visitaA(t){
    if (t == undefined) return;
    console.log(t.val);
    visitaA(t.sx);
    visitaA(t.dx);
}

let t = {val: 1, figli: [
    {val: 3, figli: [
        {val: 4, figli: [
            {val: 11, figli: []},
            {val: 12, figli: []},
        ]},
        {val: 5, figli: [
            {val: 13, figli: [
                {val: 14, figli: []}
            ]}
        ]},
        {val: 6, figli: []}
    ]},
    {val: 2, figli: [
        {val: 7, figli: []},
        {val: 8, figli: [
            {val: 15, figli: [
                {val: 16, figli: []}
            ]}
        ]},
        {val: 9, figli: []},
        {val: 10, figli: []}
    ]}
]}

let bt = {
    val: 7,
    sx: {val: 4, sx: {val: 3}, dx: {val:12, sx: {val: 4, dx:{val:3}, sx:{val: 8}}}},
    dx: {val: 11, dx: {val: 1}, sx: {val:9, sx: {val: 6}}}
}

visit(t)

// {val=12, figli=[
//     {val: 8, figli: [{val: 4}, {val: 14}, {val: 2, figli:[{val:6}]}]},
//     {val: 3, figli: [
//       {val: 10, figli: [
//         {val: 6, figli: [{val: 1}, {val: 5}, {val: 9, figli: [{val:1}]}] },
//         {val: 13},
//         {val: 6, figli: [{val: 7, figli: [{val: 1},{val: 16}]}]},
//       ]}
//     ]}, 
//     {val: 14}, 
//     {val: 2, figli:[{val:6}]},
//     {val: 8},
//     {val: 1, figli: [{val: 1}]}
//   ]
// }