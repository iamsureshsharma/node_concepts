/// understanding the prototyping in js
function Rect(a, b) {
    this.length = a;
    this.breadth = b;
}

Rect.prototype.getDimensions = function () {
    return { length : this._length, breadth : this._breadth };
};

Rect.prototype.setDimensions = function (len, bred) {
    this.length = len;
    this.breadth = bred;
};