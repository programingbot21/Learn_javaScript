function inficu(v1){
    return function(v2){
        if(!v2){
            return v1
        }
        return inficu(v1+v2)
    }
}
console.log(inficu(1)(2)(3)(4)(5)(6)(7)())