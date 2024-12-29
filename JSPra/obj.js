var yObj = {
    foo: 'bar',
    func: function() {
        var self = this; // Step 1: Save reference to `this` in `self`
        
        console.log("outer func : this.foo = " + this.foo); // Step 2: `this` refers to `yObj`
        console.log("outer Func : this.foo = " + this.foo); // Step 3: Same as Step 2

        (function() { // Step 4: Anonymous function (a regular function, not an arrow function)
            console.log("outer func : this.foo = " + this.foo); // Step 5: `this` in a normal function will refer to global object (or `undefined` in strict mode)
            console.log("outer Func : self.foo = " + self.foo); // Step 6: `self` was saved as `yObj`, so `self.foo` refers to `yObj.foo`
        }());
    }
};
yObj.func()
