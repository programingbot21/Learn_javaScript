

function outerFunction(a) {
    function innerFunction(b) {
        console.log(a + b);  // Inner function has access to outer function's variable `a`
    }
    innerFunction(5); // Calling inner function
}

outerFunction(10); // Output: 15
