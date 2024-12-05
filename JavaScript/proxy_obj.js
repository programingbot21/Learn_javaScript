

let user = {
    _password : "Secret"
}

let opt = {
    get(target, prop){
        if(prop === "_password")
         throw new Error("Access Denied")

         return target[prop]
    },
    ownKeys(target){
        return Object.keys(target).filter
        (kay => !key.startsWith("_"))
    },
    set(target , prop, val){
        if(prop === "salary")
        return false
        target[prop] = val
        return true
    }
}

user = new Proxy(user, opt)
user.name = 'Raj Shree'
user.age = 34
user.salary = "433,3400"
// console.log(res.name)
// console.log(res.age)
//  console.log(user.salary)
//  console.log(user._password)
 console.log(Object.values(user))


