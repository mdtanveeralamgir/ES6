//Javascript prototype

/*
Every function has a prototype built in
Initialy the prototype is empty
More things can be added in the prototype
__proty__ is the keyword to access the prototype of a function

*/

//Prototype property

//this is a regular function
function printSomething(myDocument) {
    this.param = myDocument;
}

//adding a new method using prototype
printSomething.prototype.print = function() { //Can not use the arrow function =>. does not work with prototype. this in => refers to outer loop
    console.log(this.param);
};

let obj = new printSomething("printing");
obj.print();


//Chain of prototype
//first JS will try to find the property on the current object,
//If not found then it will keep on looking the parent objects until its found
//If nothing is found then it will be undefine

function People() {
    this.superStar = "Mickel Jackson";
}

People.prototype.athlete = "CR7";

let famousPerson = new People();
famousPerson.superStar = "Steve Jobs";

//will return steve jobs.
//the property superstar will be searched in famousPerson.
//Since superstar has been redefinied in famousPerson so it will show 'Steve jobs'
console.log(famousPerson.superStar);

/*
If we declare the functions in the constructor directly then that function would be 
duplicated each time a new object is created. This is a big problem for large function.
*/

//Recommended way to create/inherite objects

const person = {
    isHuman: false,
    print: function() {
        console.log(`My name is ${this.name}. Am I human, ${this.isHuman}`)
    }
}

const me = Object.create(person);

me.name = 'Opel'; //name is a property of me not person
me.isHuman = true; //inherited property can be overritten

me.print();

//Another example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

//Defining superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}

//Adding property move to Shape function
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.log("Shape moved");
};

//Subclass
function Rectangle() {
    Shape.call(this); //calling super constructor. if needed to pass a param then it would be: Shape.call(this, param);
}

//Subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);

//Now need to set the Rectangle.prototype.constructor to Rectabgle
//Otherwise it will take the prototype.constructor to Shape
//link: https://tinylink.net/EiSlU
Rectangle.prototype.constructor = Rectangle;
let rec = new Rectangle();

console.log(rec instanceof Rectangle); //True
console.log(rec instanceof Shape); //true
console.log(rec.move(1, 2));