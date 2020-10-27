//Factory pattern
//Creating an object using factory pattern

let factoryPattern = function(name, age, location) {

    const printObj = () => {
        console.log(`Name: ${name}, Age: ${age}, Location: ${location}`);
    };

    //returning all the param and the printObj function
    return { name, age, location, printObj };

}

let person1 = factoryPattern('opel', 33, 'Canada');
let person2 = factoryPattern('Tanveer', 33, 'Bangladesh');


//The scope and closure made it possible to printObj live outside the scope of the function.
//Since the porintObj has been returned and stored in the person1 and 2 so it's possible to call printObj
person1.printObj();
person2.printObj();

//Another example of factory pattern and closure

const counter = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    }
}


const counter1 = counter(); //Here counter1/2 is closures
const counter2 = counter(); //Because of the clouser the inner variable is accessable
counter1(); //0
counter1(); //1
counter2(); //0

//Another broad example

const Player = (name, level) => {
    let health = level * 2;
    const getName = () => name;
    const getLevel = () => level;
    const die = () => {
        console.log('Game Over!');
    };

    const damage = (x) => {
        health > 0 ? health -= x : die();
    };

    const attack = enemy => {
        if (level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`);
        }
        if (level >= enemy.getLevel()) {
            damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
        }
    };

    return { attack, getLevel, getName };
};

let hero = Player('Spiderman', 10);
let villen = Player('Octopas', 9);

hero.attack(villen);

//Inheritance in factory
//has a relationship

const person = name => {
    const sayName = () => { console.log('My Name is ' + name); };
    return { sayName };
};

const NerdPerson = name => {
    const num = person('Opel'); //Now use the sayName from person
    const print = () => {
        num.sayName();
    };
    return { print };
};

const per = NerdPerson('Foo');
per.print();