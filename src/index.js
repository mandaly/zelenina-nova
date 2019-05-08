<<<<<<< HEAD

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
=======
"use strict";

/* import modulů */
import {data} from "./zelenina-data"; //databáze zeleniny
import Vypis from './vypis'; //výpis zelenin
import Pocasi from "./pocasi";
import Predpoved from "./predpoved";
//import Filtry from './filtry';
//import Vyber from './vyber';
//import Zelenina from './zelenina'; //třída zeleniny

/* založíme objekt vypis (třída Vypis) */
let vypis = new Vypis();

Pocasi();
Predpoved();

//vypíšeme všechny zeleniny DOTAZ - do polí detailu se nevloží data (kamarádi, živiny a pod)
vypis.zeleninaAllList(data);
>>>>>>> a594432fc748e352fcaf015858fa0f58355f2318

