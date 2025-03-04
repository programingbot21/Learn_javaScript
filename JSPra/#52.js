var lakes = ['Donner', 'Marlettr', 'Tahoe', 'Almanor', 'Shasta'];
var [first, ...rest] = lakes;

console.log(first, rest.join(', '));

console.log(rest);