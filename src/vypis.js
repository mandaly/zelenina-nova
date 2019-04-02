import Zelenina from "./zelenina";

export default class Vypis {

    constructor() {
      this.currentZelenina = null;
      this.vypis = [];
    }
  
    //projdi zelenina-data a vypiš profily všech zelenin
    zeleninaAllList(zeleninaData){
        zeleninaData.forEach(vegetable => {
            let zelenina = new Zelenina(vegetable.jmeno, vegetable.obrazek, vegetable.sklizeno, vegetable.vyseti, vegetable.sklizeni, vegetable.ziviny, vegetable.prikryti, vegetable.opora, vegetable.predpestovat, vegetable.pocet, vegetable.vzdalenostDelka, vegetable.vzdalenostSirka, vegetable.meziradek, vegetable.kamaradi, vegetable.nepratele)
            this.vypis.push(zelenina);
            zelenina.renderHTML(); //vypiš info do medailonku
        });
    }

    //zatím nic
    schovat(event){
        if(this.currentZelenina !== null){
            this.currentZelenina = null;
            event.detail = false;
            document.querySelector(".zelenina-detail").style.visibility = "none";
        };
    }

    //zatím nic
    showDetail(event){
        schovat();

        this.currentZelenina = event;
        event.detail = true;
        renderHTML(this.currentZelenina); //vypiš všechno info z detailu
    }
    
}