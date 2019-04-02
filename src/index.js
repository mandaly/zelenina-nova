"use strict";

/* import modulů */
import {data} from "./zelenina-data"; //databáze zeleniny
import Zelenina from './zelenina'; //třída zeleniny
import Vypis from './vypis';
import Pocasi from "./pocasi";
//import Filtry from './filtry';
//import Vyber from './vyber';

/* založíme objekt vypis (třída Vypis) */
let vypis = new Vypis();

//vypíšeme všechny zeleniny
vypis.zeleninaAllList(data);




