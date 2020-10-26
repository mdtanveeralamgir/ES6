//cloure

//Lexical scoping: variable define outside function scope is available inside the function but variable define inside function is not 
//available outside function

//Simple example
let value = 3;
let addNum = function() {
    let inner = 2; //only available inside this function
    return value + inner;
}

//Closure proper example

let addTo = function(passed) { //A function takes a param (int)
    return (inner) => passed + inner; //returns a function that takes another param and add it with outer param (passed)
}

let addTwo = addTo(1);
console.log(addTwo(2)); //Answer is e

/*
Above when the addTo returns a function the function preserve the value passed through param "passed"
this is called closure
*/