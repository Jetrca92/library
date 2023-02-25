// Array for storing books
let myLibrary = [];

// Book class
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        console.log(`${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`);
    }
    pushNewBook() {
        myLibrary.push(this);
    }
}

// Adds book to array
function addBook() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#isRead').checked;
    const book = new Book(title, author, pages, read);
    book.pushNewBook();
    createBookCard(book);
}

// Displays all books in cards
function createBookCard(book) {

    // Create elements and set class, innerHTML
    const div = document.createElement('div');
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const pPages = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    div.setAttribute('class', 'book-card');
    div.setAttribute('data-title', `${book.title}`);
    readBtn.setAttribute('class', 'btn');
    removeBtn.setAttribute('class', 'btn');
    readBtn.onclick = toggleRead;
    removeBtn.onclick = removeBook;

    pTitle.innerHTML = book.title;
    pAuthor.innerHTML = book.author;
    pPages.innerHTML = `${book.pages} pages`;
    removeBtn.innerHTML = "Remove";

    // Add css for read property
    if (book.read) {
        readBtn.classList.add('btn-light-green', 'readBtn');
        readBtn.innerHTML = "Read";
    } else {
        readBtn.classList.add('btn-light-red', 'readBtn');
        readBtn.innerHTML = "Not read";
    }

    div.appendChild(pTitle);
    div.appendChild(pAuthor);
    div.appendChild(pPages);
    div.appendChild(readBtn);
    div.appendChild(removeBtn);

    const booksGrid = document.querySelector('#booksGrid');
    booksGrid.appendChild(div);
}

// Form for add book appears onclick
document.querySelector('#addBook').addEventListener('click', () => {
    const card = document.querySelector('#book-form');
    card.style.display = 'flex';
    setTimeout(() => {
        card.style.opacity = 1;
      }, 0);
});

document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault(); // prevent load

    // and then do your stuff
    addBook();
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#pages').value = "";
    document.querySelector('#isRead').checked = false;
    document.querySelector('#book-form').style.display = 'none';
    return false;
});

const toggleRead = (e) => {
    const title = e.target.parentNode.firstChild.innerHTML;
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === title) {
            myLibrary[i].read = !myLibrary[i].read;
            const read = myLibrary[i].read;
            updateBookCard(title, read);
        }
    }
}

const removeBook = (e) => {
    const bookDiv = e.target.parentNode;
    bookDiv.remove();
}

function updateBookCard(title, read) {
    // Find the book with the matching title
    const book = myLibrary.find((book) => book.title === title);
  
    // Update the read status of the book
    book.read = read;
  
    // Find the corresponding book card and update it
    const bookCard = document.querySelector(`[data-title="${book.title}"]`);
    const readBtn = bookCard.querySelector('.readBtn');
    if (read) {
        readBtn.classList.remove('btn-light-red');
        readBtn.classList.add('btn-light-green');
        readBtn.innerHTML = "Read";
    } else {
        readBtn.classList.remove('btn-light-green');
        readBtn.classList.add('btn-light-red');
        readBtn.innerHTML = "Not read";
    }
}

