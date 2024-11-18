
const mySum = Symbol("key1")

const  Employ ={
        name: 'Rohit',
        age: 20,
        [mySum] : "mykey1",
        "Full name" : "Saini",
        location: "Delhi",
        email: "rohit@gmain.com",
        lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Employ);
// console.log(" Employ Age : " + Employ.age); 
// console.log( "Employ Location : "  + Employ["location"]);
// console.log(Employ["Full name"])
// console.log(Employ[mySum])

Employ.email = "Roh@gmail.com"
//  console.log(Employ)
//  Object.freeze(Employ)   
// lock the Employ Object With help of freeze

Employ.greeting = function(){
    console.log("Hello JS user")

}
 console.log(Employ.greeting())

