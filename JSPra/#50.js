var name = "Talic"
var elevation = 9870
var print = function(){
    console.log(`Mt. ${this.name} is ${this.elevation} fee tall`);

}

var funHike = {name, elevation, print}
funHike.print()