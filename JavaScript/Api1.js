let option = {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        title: 'Harry',
        body: 'brrs',
        userId:1,
    })
}

fetch('https://jsonplaceholder.typicode.com/posts', option)
.then((response) => response.json())
.then((json) => console.log(json))