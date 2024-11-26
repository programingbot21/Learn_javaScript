 class  user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    courselist = []
    getinfo(){
        return {name: this.name, Age : this.age}
    }
    enrolment(name){
        this.courselist.push(name)
    }
    getCourseList(){
        return this.courselist
    }
}
export {user}
// // const stu = user('Raj ' , 34)

// module.exports = user;

// export const hello = () =>{
//     console.log("Hello Module")
// }

// export const ahello = (name) =>{
//     console.log("Hello " + name)
// }
// const Js = () => {
//     console.log("hell" + "Harry")
// }
// export default Js{hello, heloo};
