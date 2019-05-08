
/*import Animal from "./animal.js";
import Dog from "./dog.js";

import Person from "./person.js";

let zvire = new Animal("Bob", 20);

zvire.run();

let alik = new Dog("Alík", 10, "Haf, haf");
alik.run();
alik.bark();

let barik = new Dog("Barik", 12, "Buf");
barik.run();
barik.bark();

let osoba = new Person("Jana", "Nováková");

osoba.fullName = "Jára Cimrman";

console.log(osoba.fullName);
osoba.greet();
---------------------------------------*/

/*
třída Knihovna
- seznam knih (pole)
- poslední přečtená kniha
- aktuálně čtená kniha
- další kniha na přečtení
- pocet neprectenych knih
+ přidat knihu (metoda)
+ vypsat knihy
+ přečíst aktuální knihu

třída Kniha - vlastnosti
- autor
- název
- rok vydání
- přečtená?
*/

import Book from "./book";
import Library from "./library";

let knihovna = new Library();

knihovna.addBook(new Book("Wilbur Smith", "Řeka bohů 1", 1987));
knihovna.addBook(new Book("Wilbur Smith", "Řeka bohů 2", 1990));


knihovna.listAllBooks();

knihovna.startReadingNextBook();

knihovna.listAllBooks();

