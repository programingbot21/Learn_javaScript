let  reg = /harry/;

let s = 'This is a great harry Potter'
let res = reg.exec(s)
console.log(res)

let ress = reg.test(s)
console.log(ress)

let ress1 = s.match(reg)
console.log(ress1)

let ress2 =s.search(reg)
console.log(ress2)