//Class
/*
source: https://javascript.info/class
source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class and obj constructor are almost same
difference is: class has constructor, usese strict mode, and class methods are non-enumerable
*/

class User {
    constructor(name) {
        this.name = name;
    }

    SayHi() {
        alert('Hi ' + this.name);
    }


    // getter setter
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    //class fields
    printName() {
        console.log(`${this.name}`);
    }

    //prompt for name
    promptName() {
        this.name = prompt("Your Name?");
        alert(this.name);
    }

    // makng bound method with the class field
    click() {
        console.log(this.name);
    }

    //elegent approch. see line 53 - 60
    clickElegent = () => {
        console.log(this.name);
    }

    //static method and properties
    //can't be called via class instances
    static displayName = "User";
    static printDisplayName() {
        console.log(User.displayName); //stati method printing
    }
}

let user = new User('Opel');
// user.printName();
// user.name = 'Shamma'; //Using setter
// console.log(user.name); //Using getter
// user.promptName();
// alert(typeof User); //Function
// user.SayHi();

//This will not work, nothing will show up
//This is known as "losing this"
// setTimeout(user.click, 1000);

//One way to solve this
setTimeout(() => user.click(), 1000);
setTimeout(user.clickElegent, 1000);

console.log(User.displayName); //static property
User.printDisplayName(); //calling static method
//Class expression
let anotherClass = class {
        constructor(name) {
            this.name = name;
        }
        print() {
            console.log(this.name);
        }
    }
    /*
    let ac = new anotherClass('opel');
    ac.print();
    */
    //Class expression with name
    //If a class expression has a name then it's visible inside the class only

let cewn = class MyClass {
    visibility() {
        console.log(MyClass); //MyClass Name is visible only iside the class
    }
}

// new cewn().visibility(); //Works
// console.log(MyClass); //error: my class is not defined


//return a class
function returnClass(name) {
    return class {
        print() {
            console.log(name);
        }
    }
}
/*
let returnedClass = returnClass('Aayid');
let vari = new returnedClass();
vari.print();
*/
//Computed names
class ComputerName {
    ['say' + 'hi']() {
        console.log('Say hi');
    }
}
/*
let cn = new ComputerName();
cn.sayhi();
*/