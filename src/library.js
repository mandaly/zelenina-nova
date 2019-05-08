import Book from "./book.js";

export default class Library {
    constructor(){
        this.bookList = []; //pole
        this.lastBook = null; //vlastnost knihovny
        this.currentBook = null;
        this.nextBook = null;
        this.unreadBooks = 0;
    }

    addBook(book){

        this.bookList.push(book);

        if(!book.isRead){ //kniha není přečtená
            this.unreadBooks ++;

            if(this.nextBook === null){
                this.nextBook = book;
            }       
        }

    }

    listAllBooks() {
        console.table(this.bookList);
        console.log(this.currentBook);
        console.log(this.nextBook);
    }

    startReadingNextBook() {

        if(this.nextBook !== null){ //máme knihu ke čtení?
            this.currentBook = this.nextBook; //dej jí do čtení knihy
            this.nextBook = null; //vymaž další knihu ke čtení

            for (let book of this.bookList){ //projdi všechny knihy v bookListu
                if(!book.isRead && book !== this.currentBook){ //kniha není přečtená a není aktuálně čtená
                    this.nextBook = book;
                    break; //opuštění smyčky
                }
            }
        }

    }
}