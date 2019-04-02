import Zelenina from "./zelenina";

export default class Vypis {

    constructor() {
      this.currentZelenina = null;
    }
  
    //projdi zelenina-data a vypiš profily všech zelenin
    zeleninaAllList(){
        zelenina.forEach(Zelenina => {
            console.log(Zelenina);
            renderHTML(); //vypiš info do medailonku
        });
    }

    schovat(event){
        if(this.currentZelenina !== null){
            this.currentZelenina = null;
            event.detail = false;
            document.querySelector(".zelenina-detail").style.visibility = "none";
        };
    }

    showDetail(event){
        schovat();

        this.currentZelenina = event;
        event.detail = true;
        renderHTML(this.currentZelenina); //vypiš všechno info z detailu
    }
    
}