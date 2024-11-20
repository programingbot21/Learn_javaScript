const mat = [[1,3,4],[3,6,4,]]
const flat = mat.flat(1)
console.log(flat)


const mat1 = [1,[1,3,4],[3,6,4,], [2,4,7,8,6],9]
const flat1 = mat1.flat(1)
console.log(flat1)



const mat2 = [1,[1,3,4],[3,6,4,], [[[[[[[[[2]]]]]]]]]]
const flat2 = mat2.flat(Infinity)
console.log(flat2)

const mat3 = [[1,3,4],[3,6,4,]]
const total = mat3.flat(Infinity).reduce((a,v) => a+v, 0);
console.log(total)
