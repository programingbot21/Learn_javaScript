//simple Object
// const stu = {
//     nmae:"code",
//     roll: '74658',
//     class: 9,
// }
// console.log(stu)
// delete stu.roll
// delete stu.class

// console.log(stu)

const obj = Object.create({
    nmae:"JavaScript",
    roll: '74658',
    class: 5,
})
console.log(obj)
delete obj.roll
console.log(obj)