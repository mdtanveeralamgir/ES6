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
// Book.prototype.getInfo = function() {
//     return `${this.title} by ${this.author}, ${this.totalPage} pages, ${this.hasRed ? 'read' : 'has not read yet'}`;
// };

let book1 = new Book('Debdash', 'HA', 200, 'Yes');

//Adding book obj into local storage
function addBookToLocalStorage(bookName, book) {
    localStorage.setItem(bookName, JSON.stringify(book));
};

//Retreving book obj from localStorage
let getBookFromLocalStorage = () => {
    let table = createTableHead();
    for (let i = 0; i < localStorage.length; i++) {
        let bookName = 'book' + i;
        let element = JSON.parse(localStorage.getItem(bookName));
        createTable(table, element);
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
function createTable(table, element) {

    let row = table.insertRow();
    let tableData = document.getElementById('table-data');
    for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
    }
    tableData.appendChild(table);
}

function showHideForm() {
    let form = document.getElementById('form-div');
    form.style.display = "block";
    if (form.style.display == "none") {
        form.style.display = "block";
    }
}

// function addButton() {
//     let button = document.createElement('BUTTON');
//     button.classList.add('button-primary');
//     button.classList.add('center-button');
//     button.id = 'add-button';
//     // button = document.getElementById('addb-button');
//     let text = document.createTextNode('Add New Book');
//     button.appendChild(text);
//     button.addEventListener("click", showHideForm);
//     document.body.appendChild(button);

// }


function addData() {
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let totalPage = document.getElementById('totalPage');
    let hasRead = document.getElementById('hasRead');

    if (title.value == '' || author.value == '' || totalPage.value == '') {
        console.log('invalid input');
    } else {
        let newKey = localStorage.length;
        let bookName = 'book' + newKey;
        let book = new Book(title.value, author.value, totalPage.value, hasRead.value);
        addBookToLocalStorage(bookName, book);
    }
}


function run() {
    // localStorage.clear();
    for (let i = 0; i < 10; i++) {
        let bookName = 'book' + i;
        addBookToLocalStorage(bookName, book1);
    }
    getBookFromLocalStorage();
    console.log(localStorage)
}

run();