/*
Higher order function
Any function that takes a fucntion as an argument or returns a function is a higher order function
higher order function for arrays in js: map(), sort(), filter(), reduce(),
*/


//Takes a function as param and calls it
//In the param don't write like callback()
//because it's the param not the function itself.
function sing(callback){
    console.log("song");
    if(callback instanceof Function) //making sure if callback is a function
        callback();
}

function dance(){
    console.log("dancing");
}

sing(dance);
//another way to pass function into sing as param
sing(function () {console.log("dancing");});
//more simplarer way. ES6 version
sing(() => {console.log("dancing");});

//*******************************

//function returns a function
function multiplier(factor){
    return (x) => x * factor;
}

//Creating an array that holds 10 functions
let arr = [];
for(let i = 1; i < 11; i++){
    arr.push((x) => x * i);
}