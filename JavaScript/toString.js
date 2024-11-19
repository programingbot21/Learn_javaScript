var num = {
    val: 94,
    val2: 87
}.toString()
console.log(num)
// console.log("Convert to : " + typeof(num.toString()));

let point = {
    x : 1,
    y : 8,
    toString: function() {
        return `(${this.x}, ${this.y})`;
    }
}
console.log(String(point))