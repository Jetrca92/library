let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(`${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read'} yet`);
    }
}

function addBook() {
    const title = prompt('Title');
    const author = prompt('Author');
    const pages = prompt('Pages');
    const read = confirm('Read? OK for yes, Cancel for NO');
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

document.querySelector('#addBook').addEventListener('click', () => {
    const card = document.querySelector('#form');
    card.style.display = 'flex';
    setTimeout(() => {
        card.style.opacity = 1;
      }, 0);
});