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
  
  //made for loop to create books from the data and add to the array
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
  console.log(books)
  }
}

// create bookshelf instance
let _bookshelf = new bookshelf(bookData)
console.log(_bookshelf)

// adding 'onclick' event to HTML button
let submit_btn = document.getElementById("add_book")
submit_btn.onclick = function () {
  let title = document.querySelector("[name=title]").value;
  let author = document.querySelector("[name=author]").value;
  let language = document.querySelector("[name=language]").value;
  let subject = document.querySelector("[name=subject]").value;
  const _book = new book(author, language, subject, title); 
  _bookshelf.books.push(_book);
  console.log(_bookshelf);
}

// display first book
let _book = _bookshelf.books[1];
console.log(_book);

let title_div = document.getElementById("title")
title_div.innerText = _book.title; 

let author_div = document.getElementById("author")
author_div.innerText = _book.author; 

let subject_div = document.getElementById("subject")
subject_div.innerText = _book.subject; 

let language_div = document.getElementById("language")
language_div.innerText = _book.language; 



