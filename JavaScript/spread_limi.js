const original = {
    a:1, b:{c:2}
}
const copy = {...original}
console.log(original.b.c)
copy.b.c = 3;
console.log("Update Value :  " + original.b.c)