const submit = document.getElementById('submit');

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');

const bookRow = document.querySelector('.row');

let myLibrary = [
  // [Book = {
  //   title: 'Artemis Fowl',
  //   author: 'Eoin Colfer',
  //   pages: 547
  // }]
];

function Book(title, author, pages) {
  this.title = title,
  this.author = author,
  this.pages = pages
}

submit.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
  event.preventDefault();
  let newBook = new Book(
    bookTitle.value, bookAuthor.value, bookPages.value
  )
  myLibrary.push(newBook);
  render();
}

function render() {
  // create a new dom div with the class of: book col-sm-4
  let div = document.createElement('div');
  div.classList = 'book col-sm-4'
  // generate title in div, taken from the newBook
  let title = document.createElement('h1');
  title.innerText = bookTitle.value;
  title.classList = 'book-title';
  // generate author in div, taken from newBook
  let author = document.createElement('p');
  author.innerText = bookAuthor.value;
  author.classList = 'book-author';
  // generate pages in div, taken from newBook
  let pages = document.createElement('p');
  pages.innerText = bookPages.value;
  pages.classList = 'book-pages';
  // give it a read status taken from newBook

  // append these newBook attributes to the div
  div.appendChild(title);
  div.appendChild(author);
  div.appendChild(pages);
  // append div to the end of BookRow
  bookRow.appendChild(div);
}



// function addBookToLibrary() {
//   event.preventDefault();
//   // create a new dom div with the class of: book col-sm-4
//   let newBook = document.createElement('div');
//   newBook.classList = 'book col-sm-4';
//   // give it the title taken from the form
//   let title = document.createElement('h1');
//   title.innerText = bookTitle.value;
//   title.classList = 'book-title'
//   // give it the author taken from the form
//   let author = document.createElement('p');
//   author.innerText = bookAuthor.value;
//   author.classList = 'book-author'
//   // give it the pages taken from the form
//   let pages = document.createElement('p');
//   pages.innerText = bookPages.value;
//   pages.classList = 'book-pages';
//   // give it a read status taken from the form
  
//   // append these attributes to the newBook
//   newBook.appendChild(title);
//   newBook.appendChild(author);
//   newBook.appendChild(pages);
//   // append newBook to the end of BookRow
//   bookRow.appendChild(newBook);
//   // 
// }