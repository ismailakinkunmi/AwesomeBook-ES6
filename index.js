import Book from './modules/book.js';
import Time from './modules/date.js';
import displayThePage from './modules/displayThePage.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.getElementById('form');

document.addEventListener('DOMContentLoaded', Book.displayBooks());

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (title === '' || author === '') {
    form.reset();
  } else {
    const book = new Book(title, author);
    Book.displayBookOnUi(book);
    Book.addBooksToLocalStorage(book);
    form.reset();
  }
});

document.querySelector('#container').addEventListener('click', (e) => {
  Book.removeBookUi(e.target);
  Book.removeBooksFromLocalStorage(e.target.id);
});

document.addEventListener('DOMContentLoaded', displayThePage.pageView);
const showtime = new Time();
showtime.show();
