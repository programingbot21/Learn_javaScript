var sandwich = {
    bread: 'crunch',
    meat: 'tuna',
    cheese: 'swiss',
    toppings: ["lettuce",  "tomato", "mustard"]
}

var {bread, meat}  = sandwich;
console.log(bread, meat);


var {bread, meat} = sandwich;
bread = "garlic";
meat = "turkey";

console.log(bread, meat);

console.log(sandwich.bread, sandwich.meat);

