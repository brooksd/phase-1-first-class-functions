function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function myFunc() {
        console.log("returns a named function");
    };
}

function returnsAnAnonymousFunction() {
    return () => console.log("Returns an anonymous function");
}