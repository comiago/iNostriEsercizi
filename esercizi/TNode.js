class TNode {
    constructor(v, e = '') {
        this.valore = v;
        this.etichetta = e;
        this.figli = []
    }

    add() {
        for (let i of arguments)
            this.figli.push(i)
    }

    *visit() {
        yield this.valore;
        for (let figlio of this.figli)
            for (let valore of figlio.visit())
                yield valore;
    }
}

function BadTreeError() {
    return true;
}

BadTreeError.prototype = Object.create(Error.prototype);

class BNode extends TNode {
    add() {
        if (this.figli.length + arguments.length > 2)
            throw new BadTreeError ();

        for (let i of arguments)
            this.figli.push(i)
    }
}