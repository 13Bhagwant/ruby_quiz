function Book(title, authors, edition) {
  this.title = title
  this.authors = authors
  this.edition = edition
}

const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book(
  "The Rust Programming Language",
  ["Steve Klabnik", "Carol Nichols"],
  2
);

function Library() {
  this.books = []
}

const lib = new Library();

Library.prototype.shelve = function(book) {
  this.books.push(book)
}

Library.prototype.findByTitle = function(title) {
  const searchResults = []
  for (let book of this.books) {
    if (book.title.toLowerCase().includes(title.toLowerCase())) {
      searchResults.push(book)
    }
  }
  return searchResults
}

Library.prototype.list = function () {
  return this.books
}




class Book {
  constructor(title, authors, edition) {
    this.title = title
    this.authors = authors
    this.edition = edition
  
  }
  }

  //////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  class Book {
    constructor (title, authors, edition) {
      this.title = title
      this.authors = authors
      this.edition = edition
    }
  }
    
    const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
    const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
    const theRustProgLang = new Book(
      "The Rust Programming Language",
      ["Steve Klabnik", "Carol Nichols"],
      2
    );
    
    class Library {
      constructor() {
        this.books = []
      }
        
      shelve(book) {
        this.books.push(book)
        return this
      }
    
        findByTitle(title) {
          const searchResults = []
          for (let book of this.books) {
            if (book.title.toLowerCase().includes(title.toLowerCase())) {
              searchResults.push(book)
            }
          }
          return searchResults
        }
    
        list() {
          return this.books
        }
  }
  ​
  const lib = new Library();