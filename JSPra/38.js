// fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
//   .then(response => response.json())
//   .then(data => {
//     const user = data.results[0]; // Get the first user
//     const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
//     const age = user.dob.age;
//     const gender = user.gender;

//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log(`Gender: ${gender}`);
//   })
//   .catch(error => console.error("Error fetching data:", error));

fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
  .then(response => response.json())
  .then(data => {
    const user = data.results[0]; // Get the first user

    // Extracting key details
    const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const age = user.dob.age;
    const gender = user.gender;
    const allData = JSON.stringify(user, null, 2); // Pretty print all data

    // Display on webpage
    document.getElementById("name").innerText = `Name: ${name}`;
    document.getElementById("age").innerText = `Age: ${age}`;
    document.getElementById("gender").innerText = `Gender: ${gender}`;
    document.getElementById("allData").innerText = allData; // Show all data
  })
  .catch(error => console.error("Error fetching data:", error));
