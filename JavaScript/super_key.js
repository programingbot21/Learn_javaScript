//super keyword

class car{
    constructor(name){
        console.log(name)
    }
}
class price extends car{
    constructor(name1) {
        super(name1);
        console.log(name1)
        console.log('child class')
    }
}
let  mycar = new price('honda')