let iter = [55,54]
let res = iter[Symbol.iterator]();
for(let resu = res.next(); !resu.done; resu = res.next()){
    
    console.log(resu)

}