class createUser{
    #age
    constructor(name, age){
        this.name  = name
        this.#age = age
    }
    user(){
        return this.name + ' ' + this.#age
    }
}

const user1 = new createUser('John', 19)