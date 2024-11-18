let person = {
    name: 'John',
    age: 30,
    job: 'developer'
  };
  
  with (person) {
    console.log(name);  // John
    console.log(age);   // 30
    console.log(job);   // developer
  }
  