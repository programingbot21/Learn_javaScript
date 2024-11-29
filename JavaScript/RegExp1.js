const regex = /o/g;
const res = regex.exec('Hello World')
console.log(res)

const regex1 = /abc/i;
console.log(regex1.toString())

const regex2 = /o/g;
const ree = 'hello world and old'.match(regex2)
console.log(ree)

let regex3 = /world/i;
let neres = "Hello World".replace(regex3, 'universe')
console.log(neres)

let regex4 = /(\d{4})-(\d{2})-(\d{2})/;
let result = "2024-11-28".match(regex4);
console.log(result); // ["2024-11-28", "2024", "11", "28"]
