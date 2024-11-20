const strs = ['t', 's', 'e', 'b'];
let best = strs.reduce((c,v) => c+v);

console.log(best)


// reduce best
const strs1 = ['t', 's', 'e', 'b'];
let best1 = strs.reduceRight((c,v) => c+v);

console.log(best1)


const arr3 = [2,4,3,2,5,4];
const aa = arr3.reduce((h1,h2) => {
    return h1+h2
})
console.log(aa)

const arr1 = [ 2,43,2,4,2]
const reduce_fun = (h1,h2) => {
    return h1+h2
}
const aa2 = arr1.reduce(reduce_fun)
console.log(aa2)