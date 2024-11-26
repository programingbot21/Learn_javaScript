//  class student{
//     constructor(name, age, USN){
//         this.name = name
//         this.age = age
//         this.USN = USN
//     }

//     stu(){
//         console.log(`My name is ${this.name} and my Age ${this.age } or my USN  ${this.USN}`)

//     }
// }



// export default student;
export class student{
    constructor(name, age, USN){
        this.name = name
        this.age = age
        this.USN = USN
    }

    stu(){
        console.log(`My name is ${this.name} and my Age ${this.age } or my USN  ${this.USN}`)

    }
}

export class tech{
    constructor(name, brand, color){
        this.name = name
        this.brand = brand
        this.color = color
    }
    getinfo(){
        console.log(`Car: ${this.name} brand: ${this.brand} color: ${this.color}`)
    }
}
