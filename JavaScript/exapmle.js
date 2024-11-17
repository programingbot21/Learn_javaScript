function testEval() {
    var x = 10;
    eval('"use strict"; x = 20;'); // This works, 'x' is already declared
    console.log(x); // 20
}
testEval()




function testStrictEval() {
    var y = 10;
    eval('"use strict"; y = 30;'); // This will throw an error in strict mode
}

try {
    testStrictEval();
} catch (e) {
    console.log(e.message); // ReferenceError: y is not defined
}

