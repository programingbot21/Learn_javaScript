const animal = {
    species: 'Dog'
  };
  
  const dog = Object.create(animal);
  dog.name = 'Buddy';
  
  console.log(dog.species);  // Output: Dog (inherited from prototype)
  
  delete animal.species;  // Try to delete the 'species' property from dog (not in dog)
  
  console.log(dog.species);  // Output: Dog (still inherited from prototype)
  

  const stu = {
    name: 'nikita kins',

  }
  const nikita = Object.create(stu)
  console.log(nikita.name);