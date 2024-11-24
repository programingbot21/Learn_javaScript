function per(name , age){
    name = (name === undefined) ? 'green' : name;
    age = (age ===  undefined) ? 'blue' : age;
    console.log('hello my name' + " " + ` ${name}` + " " + age)
}
per();
per('Alice')
per('bom', 43)