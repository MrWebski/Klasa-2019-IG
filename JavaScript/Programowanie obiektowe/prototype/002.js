Number.prototype.sum = function(a) {
    return this.valueOf() + a;
}

var x = new Number(3);

var y = x.sum(6);