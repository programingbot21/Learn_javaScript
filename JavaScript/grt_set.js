class Animal {
    constructor(name){
        this._name = name
    }
    fly( ) {
        alert("Bhag gata");
    }
    get name(){
        return this._name
    }
    set name(newName){
         this._name = newName
    }


}
let a = new Animal('Buyir')

a.fly( )
console.log(a.name)
a.name = 'JAck Ronald'
console.log(a.name)
console.log(a instanceof Animal)
console.log(c instanceof Animal)