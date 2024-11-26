class toy{
    constructor(name, Model,  price){
     this.name =name
    this.price = price
     this.brand = Model
     console.log(name,Model,  price)
    }
}
class Model extends toy{
    constructor(name1, Model1, price1){
        super(name1, Model1, price1);
        console.log(name1, Model1, price1)
    }
}
// const res = new toy('Breeza', 43, 'honda')
// console.log(res)
let res1 = new Model('creta', 'honda', 3424)

