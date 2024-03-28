/* eslint-disable max-classes-per-file */
export class Book {
  constructor(title, author, year) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookYear = year;
  }

  get dealbookTitle() {
    return this.bookTitle;
  }

  set dealbookTitle(value) {
    if (typeof value !== 'string') throw new Error('Title must be a string');
    this.title = value;
  }

  get dealbookAuthor() {
    return this.bookAuthor;
  }

  set dealbookAuthor(value) {
    if (typeof value !== 'string') {
      console.log('Author should be a string');
    }
    return (this.bookAuthor = value);
  }

  ///
  get dealbookYear() {
    return this.bookYear;
  }

  set dealbookYear(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Book year should contain numbers');
    }
    this.bookYear = value;
  }

  printInfo() {
    console.log(`${this.bookTitle}, ${this.bookAuthor}, ${this.bookYear}`);
  }

  static oldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error('Invalid input');
    }
    let oldBooksort = books[0];
    for (let i = 1; i < books.length; i++) {
      if (books[i].bookYear < oldBooksort.bookYear) {
        oldBooksort = books[i];
      }
    }
    return oldBooksort;
  }
}

export class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get dealfileFormat() {
    return this.fileFormat;
  }

  set dealfileFormat(value) {
    if (typeof value !== 'string') {
      console.log('File format should be a string');
    }
    return (this.fileFormat = value);
  }

  static createEBookBasedOnBook(book, fileFormat) {
    return new EBook(
      book.bookTitle,
      book.bookAuthor,
      book.bookYear,
      fileFormat,
    );
  }

  printInfo() {
    console.log(
      `${this.bookTitle}, ${this.bookAuthor}, ${this.bookYear}, ${this.fileFormat}`,
    );
  }
}
