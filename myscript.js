//Class
/*
source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

//Binding this with prototype and static methods
//inheritance: extends

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return this;
    }
    sound() {
        console.log(`${this.name} makes sound.`)
    }
    static eat() {
        return this;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    sound() {
        console.log(`${this.name} barks.`)
    }
}

let animal = new Animal();
console.log(animal.speak()); //Animal object
let speak = animal.speak;
console.log(speak()); //Undefined

//static methods
console.log(Animal.eat()); //Class Animal
let eat = Animal.eat;
console.log(eat()); //Undefined

let dog = new Dog('Rambo');
dog.sound();