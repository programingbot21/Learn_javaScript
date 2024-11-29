// let euros = Int1.NumberFormat("es", {style : "currency", currency: 'EUR'})
// console.log(euros.format(10))

let euros = Intl.NumberFormat("es", {style: "currency",
currency: "EUR"});
console.log(euros.format(10));

let pounds = Intl.NumberFormat("en", {style: "currency",
currency: "GBP"});
console.log(pounds.format(1000))

let data = [0.03, .76, 1]
let formatData = Intl.NumberFormat(undefined, {
    style: 'percent',
minimumFractionDigits: 1,
maximumFractionDigits: 1
}).format
console.log(data.map(formatData))


let hindi = Intl.NumberFormat('hi-IN-u-nu-deva').format;
console.log(hindi(1200))