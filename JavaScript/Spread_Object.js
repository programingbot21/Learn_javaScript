const obj = {a:1, b:2}
const Obj1 = { ...obj }
console.log(Obj1)


//Merge object

const ob = {name:'John', age:49};
const o = {work : 'Wanted',roll: 68};
const mergedobj = {...ob, ...o};
console.log(mergedobj)

const obj3 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj3, ...obj2 };

console.log(mergedObj); // { a: 1, b: 3, c: 4 }

//Add and Updating

const obj11 = {a:1, b:2};
const update = {...obj11, b: 12, c:45}
console.log(update)

