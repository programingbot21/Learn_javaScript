const URL = "https://cat-fact.herokuapp.com/facts"

const getfact = async () => {
    console.log('getting data...');
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data)
}

// let promise = fetch(URL);
// console.log(promise);