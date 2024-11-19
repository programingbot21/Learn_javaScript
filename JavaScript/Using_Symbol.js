const mySymbol = Symbol('Unique')
let obj = {
    [mySymbol]: 'This is a Symbol Property'
}
console.log(obj[mySymbol])

const mySymbol1 = Symbol('value')
let ob1 = {
    [mySymbol1] : 'THis is a Unique Value'
}
console.log(ob1[mySymbol1]);