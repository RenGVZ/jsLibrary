// make a Book class with constructor
class Book {
  constructor(title, author, pages, isbn) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isbn = isbn;
  }
}

// UI class: handles UI tasks
class UI {
  // displayBooks static method
  static displayBooks = () => {
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
    books.forEach(book => UI.addBookToList(book));
    // change const books to Store.getBooks() (after)
  }
  // addBookToList method
  static addBookToList = (book) => {
    // grab list
    const list = document.getElementById('book-list');
    // create row
    const row = document.createElement('tr');
    // generate book content inside of row (innerHTML)
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.isbn}</td>
      <td class='btn btn-danger delete'>Delete</td>
    `
    // append row to list
    list.appendChild(row);
  } 
  // static deleteBook method get element for removing book (from end of code)
  static deleteBook = (el) => {
    // if the element's class list contains delete, remove the parent's parent element
    if (el.classList.contains('delete')) {
      console.log('el:', el.parentElement)
      el.parentElement.remove()
    }
  }
   
  // showAlert method getting the message and className
  static showAlert = (message, className) => {
    // create a new div
    const div = document.createElement('div');
    // create a new div with a classname of className
    div.classList.add(`alert-${className}`);
    // append the message to the div (passed as a document.createTextNode())
    div.appendChild(document.createTextNode(message));
    // grab container and form and insert the div before the form but after the container
    const container = document.querySelector('.container');
    const form = document.getElementById('book-form');
    container.insertBefore(div, form);
    // timeout method to remove the alert class after 2 seconds
    setTimeout(function() {
      container.removeChild(div);
    }, 2000)
  }
    
  // clearFields method
  static clearFields = () => {
    // give all the information empty strings for values
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
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form values
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const bookPages = document.getElementById('pages').value;
  const bookIsbn = document.getElementById('isbn').value;
  // validate the fields, if they are empty use showAlert method
  if (bookTitle == '' || bookAuthor == '' || bookPages == '' || bookIsbn == '') {
    showAlert('Please fill out all fields', 'warning')
  } else {
    // if not, Instantiate a new book
   let newBook = new Book(bookTitle, bookAuthor, bookPages, bookIsbn) 
    // add book to UI
    UI.addBookToList(newBook);
    // add book to Store (after)
    // Store.addBook(book);

    // Show success message
    UI.showAlert('Book added', 'success');
  }
    // clear fields
    UI.clearFields();
  })

// Event: grab the event on book-list click 
document.getElementById('book-list').addEventListener('click', (e) => {
  // event.preventDefault()
  e.preventDefault();
  // remove book from Store (after)
  // Store.removeBook(event.target.parentElement.previousElementSibling.textContent);
  
  UI.clearFields();
  // use the event to remove book from UI
  UI.deleteBook(e.target)
  // showAlert that the book has been removed
  UI.showAlert('Book has been removed', 'danger');
})
