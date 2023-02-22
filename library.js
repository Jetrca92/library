// Array for storing books
let myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(`${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`);
    }
}

// Adds book to array
function addBook() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#isRead').checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// Displays all books in cars
function displayBooks(myLibrary) {

    // Create elements and set class, innerHTML
    const div = document.createElement('div');
    div.setAttribute('class', 'book-card');
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const pPages = document.createElement('p');
    const readBtn = document.createElement('button');
    readBtn.setAttribute('class', 'btn btn-light-green');
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', 'btn');


    <div class="book-card">
                <p>"The Hobbit"</p>
                <p>J. R. R. Tolkien</p>
                <p>123 pages</p>
                <button class="btn btn-light-green">Read</button>
                <button class="btn" id="rmvBtn">Remove</button>
            </div>
}

// Form for add book appears onclick
document.querySelector('#addBook').addEventListener('click', () => {
    const card = document.querySelector('#form');
    card.style.display = 'flex';
    setTimeout(() => {
        card.style.opacity = 1;
      }, 0);
});

document.querySelector('#book-form').addEventListener('submit', (event) => {
    event.preventDefault(); // prevent load

    // and then do your stuff
    addBook();
    return false;

  });

