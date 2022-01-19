/* eslint-disable no-unused-vars */

export default class Book {
  constructor(title, author) {
    this.id = Math.floor(Math.random() * 10000)
      .toString()
      .substring();
    this.title = title.value;
    this.author = author.value;
  }

  static displayBookOnUi(book) {
    const booksContainer = document.getElementById('container');
    const listContainer = document.createElement('div');
    listContainer.className = 'list-Container';
    listContainer.innerHTML += `
            <p class="text">"${book.title}" by ${book.author}</p>
            <button class='delete' id=${book.id}>Remove</button>
            `;
    booksContainer.appendChild(listContainer);
  }

  static getBooksFromLocalStorage() {
    let books;
    if (!localStorage.getItem('books')) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const displayList = Book.getBooksFromLocalStorage();
    displayList.forEach((book) => Book.displayBookOnUi(book));
  }

  static addBooksToLocalStorage(book) {
    const newlist = Book.getBooksFromLocalStorage();
    newlist.push(book);
    localStorage.setItem('books', JSON.stringify(newlist));
  }

  static removeBooksFromLocalStorage(bookId) {
    const newList = Book.getBooksFromLocalStorage();
    newList.forEach((item, index) => {
      if (item.id === bookId) {
        newList.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(newList));
  }

  static removeBookUi(book) {
    if (book.classList.contains('delete')) {
      book.parentElement.remove();
    }
  }
}
