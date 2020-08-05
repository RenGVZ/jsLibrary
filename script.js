const submit = document.getElementById('submit');

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');

const bookRow = document.querySelector('.row');

// Modal selectors
const modal = document.getElementById('myModal');
const btn = document.getElementById('button');
const close = document.getElementsByClassName('modal-close')[0];

// delete button
const deleteBtns = document.querySelectorAll('.delete');

let myLibrary = [
  {title: 'In Search of Lost Time', author: 'Marcel Proust', pages: '4,215', read: false},
  {title: '100 Years of Sol.', author: 'Garcia Marquez', pages: '415', read: false},
  {title: 'Harry Potter', author: 'J.K Rowling', pages: '815', read: false},
  {title: 'Catch 22', author: 'Joseph Keller', pages: '548', read: true}
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
  clear();
}

window.addEventListener('load', renderLibrary);

function renderLibrary() {
  myLibrary.forEach(function(i, index) {
    if (i !== '') {
      // create a new dom div with the class of: book col-sm-4
      let div = document.createElement('div');
      div.classList = 'book col-sm-4'
      // generate title in div, taken from the newBook
      let title = document.createElement('h1');
      title.innerText = i.title;
      title.classList = 'book-title';
      // generate author in div, taken from newBook
      let author = document.createElement('p');
      author.innerText = i.author;
      author.classList = 'book-author';
      // generate pages in div, taken from newBook
      let pages = document.createElement('p');
      pages.innerText = i.pages;
      pages.classList = 'book-pages';
      // give it a read status taken from newBook

      // delete button
      let removeButton = document.createElement('button');
      removeButton.innerText = 'x';
      removeButton.classList = 'delete';
      removeButton.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete')) {
          event.target.parentElement.remove();
        }
      })
      // removeButton.id = 'v'

      // append these newBook attributes to the div
      div.appendChild(title);
      div.appendChild(author);
      div.appendChild(pages);
      div.appendChild(removeButton);
      // append div to the end of BookRow
      bookRow.appendChild(div);
    }
  })
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

  // delete button
  let deleteBook = document.createElement('button');
  deleteBook.innerText = 'x';
  deleteBook.classList = 'delete';
  // append these newBook attributes to the div
  div.appendChild(title);
  div.appendChild(author);
  div.appendChild(pages);
  div.appendChild(deleteBook);
  // append div to the end of BookRow
  bookRow.appendChild(div);
}

function clear() {
  title.value = '',
  author.value = '',
  pages.value = ''
}

// Modal functionality
btn.addEventListener('click', function() {
  modal.style.display = "block";
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
})

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
})

// delete
// document.querySelector('.delete').addEventListener('click', (event) => {
//   console.log(event);
// })
// function removeItem(i) {
//   console.log(i)
//   myLibrary.splice(i, 1);
//   renderLibrary();
//   // element.remove();
//   // restoreButton();
// }