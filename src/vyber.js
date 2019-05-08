//import Zelenina from "./zelenina";

export default class Vyber {

    constructor() {
      this.myVegetable = [];
    }

    pridejZeleninu(event){ //PROC TO NEFUNGUJE?
        this.myVegetable.push(event);
        console.log(event);
    }     

    uberZeleninu(event){
        this.myVegetable.splice(event);
        console.log(this.myVegetable);
    }

}