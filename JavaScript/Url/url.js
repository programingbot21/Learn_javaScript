const url = new URL('https://example.com/path?name=johnDone&age=25')
console.log(url.hostname)
console.log(url.pathname)
console.log(url.searchParams.get('name'));
console.log(url.searchParams.get('age'))