function funi(a,b,c){
    this.sum = a + b + c;
}
const args = [1,2,3];
const obj1 = new funi(...args)
const obj2 = Reflect.construct(funi, args)

console.log(obj1.sum)

console.log(obj2.sum)