class Ani{
    constructor(name){
        this.name = name
    }
    walk(){
        console.log('Animal ' + this.name + ' is walking')
    }
    static cap(){
        return name.charAt(0).toUpperCase() + name.subStr(1, this.name.length)

    }
}
const j = new Ani('John')
 j.walk()



 
 class Anim{
    constructor(name){
        this.name = Anim.cap(name)
    }
    walk(){
        console.log('Animal ' + this.name + ' is walking')
    }
    static cap(name){
        return name.charAt(0).toUpperCase() + name.subStr(1, this.name.length)

    }
}
const jk = new Ani('Raaakdk')
 jk.walk()