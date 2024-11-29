// Formatting and Parsing Date Strings

const d = new Date();
console.log(d)

const str = d.toString()
console.log(str)

const UTC = d.toUTCString()
console.log(UTC)

const  Local = d.toLocaleDateString()
console.log(Local)

const local = d.toLocaleTimeString()
console.log(local)
 
const Iso = d.toISOString()
console.log(Iso)

const da = d.toDateString()
console.log(da)

const time = d.toTimeString()
console.log(time)

