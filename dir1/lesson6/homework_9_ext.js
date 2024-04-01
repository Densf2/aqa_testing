import { Book, EBook } from './homework_9.js'

const ebook1 = new EBook('The Holy Grail of Investing', 'Tony Robbins', 2022, 'pdf');
ebook1.printInfo();
const book1 = new Book('Pride and Prejudice', 'Jane Austen', 1813)
book1.printInfo();

const books = [book1, ebook1]
let oldestBook =  Book.oldestBook(books)
console.log(oldestBook)
