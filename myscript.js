//reduce on array
/*
reduce takes a higher order function
that higher order function takes 2 param
1st one is accumulator
2nd one is currentValue (elements in an array)
syntex: reducer(accu, currentVal); Array.reduce(reducer);
syntex: (initial value of accu can be passed implicitely) Array.reduce(reducer, 0);
*/

let arr = [2,5,6,8,9,8,7,8,4,99];

//adding up all the value in the array
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

//finding the max element in the array
let max = arr.reduce((accu, currentValue) => accu > currentValue ? accu : currentValue);
//The 0 at the end mins accu default value will be 0.
//If there is nothing less than 0 in the arr then the min will be 0.
let min = arr.reduce((accu, currentValue) => accu < currentValue ? accu : currentValue, 0);
console.log(min);


//********************************************************

//filter on array
/*
return true if the condition stands on the each element of the array, else false
final return is a new array with the elements where the if condition was true
*/

//finding prime number
function isPrime(num){
    for(let i = 2; num > i; i++){
        if(num % i == 0)
            return false;
    }

    return num > 1;
}

let primeNumber = arr.filter(isPrime);

console.log(primeNumber);

//filter on string
let string = "Today is Thursday";
// "/\W+/" : regular expression. means anything from a - z and 0 to 9.
let s = string.split(/\W+/).filter(word => word.length >= 3);
console.log(s);