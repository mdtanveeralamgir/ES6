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
    if (!isExist(bookName)) {
        localStorage.setItem(bookName, JSON.stringify(book));
    }
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
function createTable(table, element, key) {

    let row = table.insertRow();
    let tableData = document.getElementById('table-data');

    for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
    }
    //add button
    let removeButton = addButton('Remove', key);
    let readUnread = addButton('Read/Unread', key);
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
    // button.classList.add('button-primary');
    // button.classList.add('center-button');
    // button.id = 'add-button';
    // button = document.getElementById('addb-button');
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
    console.log(this.getAttribute('data-value'));
    localStorage.removeItem(this.getAttribute('data-value'));
    location.reload();
}

function changeRead() {
    console.log(this.getAttribute('data-value'));
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
    // for (let i = 0; i < 10; i++) {
    //     let bookName = 'book' + i;
    //     addBookToLocalStorage(bookName, book1);
    // }
    getBookFromLocalStorage();

}

run();