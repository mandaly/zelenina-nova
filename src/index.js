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

//předpověď počasí DOTAZ - jak se exportuje/importuje funkce? - podívat se na lekci s export/import!
Pocasi();
Predpoved();

//vypíšeme všechny zeleniny DOTAZ - do polí detailu se nevloží data (kamarádi, živiny a pod)
vypis.zeleninaAllList(data);

