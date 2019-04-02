import Zelenina from "./zelenina";

export default class Vyber {

    constructor() {
      this.vybranaZelenina = [];
    }

    pridejZeleninu(event){
        if (this.vybranaZelenina !== null) { //je zelelnina už vybraná?
            vybranaZelenina = this.vybranaZelenina.filter(zelenina => this.vybranaZelenina.jmeno === zelenina.jmeno );
        }

        if(vybranaZelelnina === null){ //ještě jsme ji nevybrali
            this.vybranaZelenina.push(event);
        }
        
        //a zvyš počet o jedna
        this.vybranaZelelnina.pocet ++;
        console.log(vybranaZelenina);
    }

    uberZeleninu(event){
        if(vybranaZelenina.pocet <= 0){
            this.vybranaZelenina.splice(event);
        }  else {
            //sniž počet o jedna
            this.vybranaZelelnina.pocet --
        } 

        console.log(vybranaZelenina);
    }

}