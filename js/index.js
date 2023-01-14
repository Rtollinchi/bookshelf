//importing data from bookData
import { bookData } from './book-data.js';

//creating class for all the books
class book {
    constructor(author, language, subject, title,) {
      this.author = author;
      this.language = language;
      this.subject = subject;
      this.title = title;
    }
  }
  
class bookshelf {
  constructor(_books) {
  // created an empty array to add the books
let books = []
//made for loop to create books from the data anf add to the array
for (let i = 0; i < _books.length; i++){
    let data = _books[i];
    let author = data["author"];
    let language = data ["language"];
    let subject = data["subject"];
    let title = data["title"];
    
    const _book = new book(author, language, subject, title); 
    books.push(_book)
  }
  this.books = books;
}
}

let _bookshelf = new bookshelf(bookData)

addBook() {
  let title = document.querySelector("[name=title]").value;
  let author= document.querySelector("[name=author]").value;
  let language = document.querySelector("[name=language]").value;
  let subject = document.querySelector("[name=subject]").value;
  const _book = new book(author, language, subject, title); 
  _bookshelf.books.push(_book);
  console.log(_bookshelf);
}

console.log(_bookshelf);
