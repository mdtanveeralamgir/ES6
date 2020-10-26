//callback

class Test {
    constructor(passed, str) {
        this.value = passed;
        this.text = str;
    }
}

let arr = new Array(5);
let arrStr = ['Apple', 'apple', 'goava', 'Banana', 'peace'];
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Test(i, arrStr[i]);
}

/*
below sort function on array takes a call back and performs the sorting based on the function defination
*/

arr.sort((val1, val2) => {
    if (val1.text > val2.text) { //desending order based on text
        return 1;
    }
    return -1;
});

console.log(arr);