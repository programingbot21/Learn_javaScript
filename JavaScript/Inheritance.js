class Animal{
    constructor(name , color){
        this.name = name,
        this.color = color
    }
    run(){
        console.log(this.name + " is Runing and ")
    }
    shout(){
         console.log(this.name + " is Shouting")
        
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(this.name + " is eating is a banana")
    }
    hiding(){
        console.log(`${this.name} is hiding`)
    }
}
let ani = new Animal("Monkey" , "orange")
let m = new Animal("Dog" , "red")
 let j = new Monkey("Monkey" , "Brown")

ani.run()
m.shout()
 j.eatBanana()
//ani.hiding() this will thow error
