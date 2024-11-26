import { create } from "./closures_mod.js";

const count = create()
console.log(count.increment())
console.log(count.increment())
console.log(count.getcount())



