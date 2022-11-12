String.prototype.rotr = function () {
    let string = this;
    if (string.length == 0) {
        return string;
    } else {
        string += string[0];
        string = string.substring(1, string.length);
        return string;
    }
};

console.log("ciao".rotr());