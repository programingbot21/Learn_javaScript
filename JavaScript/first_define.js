let a = 1;
let b = 2;
 var arr = (a !== undefined && b !== null) ? a : b
 console.log(arr)


 let maxwidth = 120;
let max = maxwidth || performance.maxwidth || 500; // undefine
console.log(max)

let c = 0;
 let d = "hdgh";
let e = false;
let f = NaN;

let res = c ?? d ?? e ?? f 
console.log(res)
//Here, the first defined value is 0, because the ?? operator
// ignores falsy values other than null or undefined.

let username = undefined;
let defName = 'Guest';
let name = username ?? defName
console.log(name)


let options = { timeout: 0, title: "", verbose: false, n:
null };
options.timeout ?? 1000 // => 0: as defined in the object
options.title ?? "Untitled" // => "": as defined in the
//object
options.verbose ?? true // => false: as defined in the
//object
options.quiet ?? false // => false: property is not
//defined
options.n ?? 10 // => 10: property is null


let ab = 1, cd = 3 , bg = 7;
var ad = (ab ?? bg) || cd;
var add =  ab ??( bg || cd);
console.log(ad)
console.log(add)