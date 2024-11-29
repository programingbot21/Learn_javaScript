// Adding 5 days to the current date
const today = new Date();
const newDate = new Date(today);
newDate.setDate(today.getDate() + 5);

console.log("Today:", today);
console.log("New date:", newDate);


// Adding 2 years to the current date
const today1 = new Date();
const newDate1 = new Date(today1);
newDate1.setFullYear(today.getFullYear() + 2);

console.log("Today:", today1);
console.log("New date:", newDate1);
