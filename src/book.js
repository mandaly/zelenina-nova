export default class Book {

    constructor(author, title, year){
        this.author = author;
        this.title = title;
        this.year = year;
        this.isRead = false;

    }

    read(){
        this.isRead = true;
        console.log(`Super, přečetl jsi ${this.title}!`);
    }

}