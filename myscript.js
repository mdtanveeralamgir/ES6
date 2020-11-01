<<<<<<< HEAD
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
=======
//Assignment: https://www.theodinproject.com/courses/javascript/lessons/library
//Creating a library using book object

//Task: creating a obj constructor for book objects


//Book object
function Book(title, author, totalPage, hasRead) {
    this.title = title;
    this.author = author;
    this.totalPage = totalPage;
    this.hasRead = hasRead;


}

//Display book object
// Book.prototype.getInfo = function() {
//     return `${this.title} by ${this.author}, ${this.totalPage} pages, ${this.hasRed ? 'read' : 'has not read yet'}`;
// };

let book1 = new Book('Debdash', 'HA', 200, 'Yes');

//Adding book obj into local storage
function addBookToLocalStorage(bookName, book) {
    localStorage.setItem(bookName, JSON.stringify(book));
};

//check if book object is already exist in the localStorage
function isExist(bookName) {
    let book = localStorage.getItem(bookName);
    return book != null ? true : false;
}

//Retreving book obj from localStorage
let getBookFromLocalStorage = () => {
    let table = createTableHead();
    for (let i = 0; i < localStorage.length; i++) {
        let bookName = 'book' + i;
        let element = JSON.parse(localStorage.getItem(bookName));
        createTable(table, element, bookName);
    }

};

//generate table head
function createTableHead() {
    let table = document.createElement('table');
    table.classList.add('u-full-width');
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let keys in book1) {
        let th = document.createElement('th');
        let text = document.createTextNode(keys);
        th.appendChild(text);
        row.appendChild(th);
    }
    table.appendChild(row);
    return table;
}

//Generating table
function createTable(table, element, attri) {

    let row = table.insertRow();
    let tableData = document.getElementById('table-data');

    for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
    }
    //add button
    let removeButton = addButton('Remove', attri);
    let readUnread = addButton('Read/Unread', attri);
    row.appendChild(removeButton);
    row.appendChild(readUnread);
    tableData.appendChild(table);
}

function showHideForm() {
    let form = document.getElementById('form-div');
    form.style.display = "block";
    if (form.style.display == "none") {
        form.style.display = "block";
    }
}

function addButton(buttonName, attri) {
    let button = document.createElement('BUTTON');
    button.setAttribute('data-value', attri);
    let text = document.createTextNode(buttonName);
    button.appendChild(text);
    if (buttonName == 'Remove') {
        button.addEventListener('click', removeItem);
    } else if (buttonName == 'Read/Unread') {
        button.addEventListener('click', changeRead);
    }


    // button.addEventListener("click", showHideForm);
    return button;

}

function removeItem() {
    localStorage.removeItem(this.getAttribute('data-value'));
    location.reload();
}

function changeRead() {
    let bookName = this.getAttribute('data-value');
    let book = JSON.parse(localStorage.getItem(bookName));
    if (book.hasRead == 'Yes') {
        let newBook = new Book(book.title, book.author, book.totalPage, 'No');
        addBookToLocalStorage(bookName, newBook);
    } else {
        let newBook = new Book(book.title, book.author, book.totalPage, 'Yes');
        addBookToLocalStorage(bookName, newBook);
    }
    location.reload();
}


function addData() {
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let totalPage = document.getElementById('totalPage');
    let hasRead = document.getElementById('hasRead');

    if (title.value == '' || author.value == '' || totalPage.value == '') {
        console.log('invalid input');
    } else {
        let bookName = 'book' + localStorage.length;
        let book = new Book(title.value, author.value, totalPage.value, hasRead.value);
        addBookToLocalStorage(bookName, book);
        location.reload();
    }
}


function run() {
    // localStorage.clear();
    // for (let i = 0; i < 10; i++) {
    //     let bookName = 'book' + i;
    //     addBookToLocalStorage(bookName, book1);
    // }
    getBookFromLocalStorage();

}

run();
>>>>>>> Library
