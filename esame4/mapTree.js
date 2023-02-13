function map_tree(tree, sx_fun, dx_fun) {
    let tc = JSON.parse(JSON.stringify(tree));
    if(!sx_fun) sx_fun = (x) => x;
    if(!dx_fun) dx_fun = (x) => x;
    tc.val = dx_fun(tc.val);
    function fun(t){
        if(!t) return;
        if(t.sx) t.sx.val = sx_fun(t.sx.val);
        if(t.dx) t.dx.val = dx_fun(t.dx.val);
        fun(t.sx);
        fun(t.dx);
    }
    fun(tc);
    return tc;
}

// Test Case 1
var tree = {
    'val': 5,
    'sx': {
        'val': 8,
        'sx': {
            'val': 2,
            'sx': null,
            'dx': null
        },
        'dx': {
            'val': 4,
            'sx': null,
            'dx': null
        }
    },
    'dx': {
        'val': 10,
        'sx': null,
        'dx': {
            'val': 7,
            'sx': null,
            'dx': null
        }
    }
}


var tree_copy = JSON.parse(JSON.stringify(tree));

/*{
    'val': 4,
        'sx': {
        'val': 9,
            'sx': {
            'val': 3,
                'sx': null,
                    'dx': null
        },
        'dx': {
            'val': 3,
                'sx': null,
                    'dx': null
        }
    },
    'dx': {
        'val': 9,
            'sx': null,
                'dx': {
            'val': 6,
                'sx': null,
                    'dx': null
        }
    }
}*/

console.log(map_tree(tree, (x) => x + 1, (x) => x - 1));