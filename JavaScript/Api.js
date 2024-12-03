let p = fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((response) => {
    console.log(response)
})