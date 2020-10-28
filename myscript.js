//Object consturctor
//Best way to creating ab obj to reuse variables for different purpose
//Needs to be instantiate using new keyword.
//It's always better to return the toString as a string rather than console.log inside the function
//Source: https://www.theodinproject.com/courses/javascript/lessons/objects-and-object-constructors

//Task: creating a obj constructor for book objects

function Book(title, author, totalPage, hasRed) {
    this.title = title;
    this.author = author;
    this.totalPage = totalPage;
    this.hasRed = hasRed;

    this.getInfo = function() {
        return `${this.title} by ${this.author}, ${this.totalPage} pages, ${hasRed ? 'read' : 'has not read yet'}`;
    };
}

let book1 = new Book('Sondha', 'HA', 200, true);

console.log(book1.getInfo());