//  Implicit Function Invocation

const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + `${this.name}`);
    }
};

 setTimeout(person.greet, 1000 );




const object = {
    method: function(){
        console.log(this)
    }
};
object.method();
 

const pe = {
    name: 'Ram',
    greet: () => {
        console.log('Hello my name is ' +  this.name)
    }
}
pe.greet()