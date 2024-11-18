const stu = {
    name:"neha",
    agr:34,
    class:34,
    run: () => {
        alert(" self run")
    }
}
console.log(stu);
let p = {
    run: () => {
        alert("run")
    }
}


p.__proto__ = {
    name2: "Jackie"
}
stu.__proto__ = p
stu.run()
console.log(stu.name2)