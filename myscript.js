/*
different array functions
*/
let arr = [1,2,3,4,5,6,7];

//map()
function doubler(x){
    return x * 2;
}

//map() does not modify current array. It works on the element of the array and returns a new array

// let doubled = arr.map(doubler);
//simpler way
doubled = arr.map(x => x * 2);
console.log(doubled);

//fill and map together
//first way
let val = new Array(10);
//fill(): will fill the array with undefine
//map(() => Math.random()): will replace undefine with random numbers and return a new array.
val = val.fill().map(() => Math.random());
// console.log(val);

//sorter way

let value = Array(10).fill().map(Math.random);
console.log(value);