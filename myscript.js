//Assignment: https://www.theodinproject.com/courses/javascript/lessons/library
//Creating a library using book object

//Task: creating a obj constructor for book objects


//Book object
function Book(title, author, totalPage, hasRed) {
    this.title = title;
    this.author = author;
    this.totalPage = totalPage;
    this.hasRed = hasRed;


}

//Display book object
Book.prototype.getInfo = function() {
    return `${this.title} by ${this.author}, ${this.totalPage} pages, ${this.hasRed ? 'read' : 'has not read yet'}`;
};

//Array to store the book

let book1 = new Book('Debdash', 'HA', 200, true);
// console.log(book1.getInfo());
localStorage.setItem('book1', book1);
let lsb = localStorage.getItem('book1');
console.log(lsb.toString());