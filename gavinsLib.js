// make a Book class with constructor
class Book {
  constructor(title, author, pages, isbn) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isbn = isbn
  }
}

// UI class: handles UI tasks
class UI {
  // displayBooks static method
  static displayBooks() {
    // Create StoredBooks array (temp)
    const StoredBooks = [
      {
      title: 'Love in The Time of Cholera',
      author: 'Gabriel Garcia Marquez',
      pages: 356,
      isbn: 2739
      },
      {
      title: 'Harry Potter',
      author: 'J.K Rowling',
      pages: 986,
      isbn: 2727
      }
    ]
    const books = StoredBooks

    // add each book from books to book list using UI addBookToList method
    books.forEach((book) => UI.addBookToList(book));

    // change const books to Store.getBooks() (after)
    
  }
    
  
  // addBookToList method
  static addBookToList(book) {
    // grab list
    const list = document.querySelector('#book-list');
    // create row
    const row = document.createElement('tr');

    // generate book content inside of row (innerHTML)
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.isbn}</td>
      <td><a href='#' class='btn alert-danger btn-sm delete'>X</a></td>
    `;
    // append row to list
    list.appendChild(row);
  } 
  // deleteBook method get element from removing book (from end of code)
  static deleteBook(el) {
    // if the element's class list contains delete, remove the parent's parent element
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
  // showAlert method getting the message and className
  static showAlert(message, className) {
    // create a new div with a classname of className
    const div = document.createElement('div');
    div.className = `alert-${className}`;
    // append the message to the div
    div.appendChild(document.createTextNode(message));
    // grab container and form and insert the div before the form but after the container
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    // timeout method to remove the div after 2 seconds
    setTimeout(() => document.querySelector(`.alert-${className}`).remove(), 2000)
  }
  // clearFields method
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#isbn').value = '';
  }
  
}
// Store class: handles storage (after)
// class Store {
//   static getBooks() {
//     let books;
//     if (localStorage.getItem('books') === null) {
//       books = [];
//     } else {
//       books = JSON.parse(localStorage.getItem('books'));
//     } return books;
//   }

//   static addBook(book) {
//     const books = Store.getBooks();
//     books.push(book);
//     localStorage.setItem('books', JSON.stringify(books));
//   }

//   static removeBook(isbn) {
//     console.log(isbn);
//     const books = Store.getBooks();

//     books.forEach((book, index) => {
//       if (book.isbn === isbn) {
//         books.splice(index, 1);
//       }
//     });

//     localStorage.setItem('books', JSON.stringify(books));
//   };
// }

// Event: UI.displayBooks() on DOMContentLoaded
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add a book on submit from the book-form
document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isbn = document.getElementById('isbn').value;

  // validate the fields, if they are empty use showAlert method
  if (title === '' || author === '' || pages === '' || isbn === '') {
    UI.showAlert('Please fill in the forms', 'danger');
  } else {
    // if not, Instantiate a new book
    let newBook = new Book(title, author, pages, isbn);
  
    // add book to UI
    UI.addBookToList(newBook);
  
    // add book to Store (after)
    // Store.addBook(book);

    // Show success message
    UI.showAlert("You've added a book", "success");
  
    // clear fields
    UI.clearFields();
  }
});
// Event: grab the event on book-list click 
document.querySelector('#book-list').addEventListener('click', (event) => {
  // event.preventDefault()

  // remove book from Store (after)
  // Store.removeBook(event.target.parentElement.previousElementSibling.textContent);
  

  // use the event to remove book from UI
  UI.deleteBook(event.target)
  // showAlert that the book has been removed
  UI.showAlert(`Book was deleted`, 'warning');
})