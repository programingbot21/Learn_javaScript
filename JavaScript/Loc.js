let url = new URL(window.location)
console.log(url)

let query = url.searchParams.get('q')
console.log(query)

let numRes = parseInt(url.searchParams.get('n') || '10')
console.log(numRes)

let con = document.location.path = "JavaScript\loc.html";
console.log(con)

let con1 = location.replace("matrix.html");
console.log(con1)