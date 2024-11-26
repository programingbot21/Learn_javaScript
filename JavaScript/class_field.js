//Class Fields

class car{
    color = 'yellow'
    constructor(name, model){
        this.name = name,
        this.model = model
    }
    mycar(){
        console.log(`${this.name}  ${this.model}  ${this.color}`)
    }

}
const carr = new car('creta', 'honda' )
carr.mycar()