import Vyber from "./vyber";

export default class Zelenina {

    constructor(jmeno, obrazek, sklizeno, vyseti, sklizeni, ziviny, prikryti, opora, predpestovat, pocet, vzdalenostDelka, vzdalenostSirka, meziradek, kamaradi, nepratele) {
        this.jmeno = jmeno;
        this.obrazek = obrazek;
        this.sklizeno = sklizeno;
        this.vyseti = vyseti;
        this.sklizeni = sklizeni;
        this.ziviny = []; //do polí se nevloží data - PROC?
        this.prikryti = prikryti;
        this.opora = opora;
        this.predpestovat = predpestovat;
        this.pocet = pocet;
        this.vzdalenostDelka = vzdalenostDelka;
        this.vzdalenostSirka = vzdalenostSirka;
        this.meziradek = meziradek;
        this.kamaradi = [];
        this.nepratele = [];
        this.detail = false;
        this.vybrano = false;
    }

    //vyrendruje medailonek a detail zeleniny
    renderHTML(){ 
        //div pro medailonek 
        const zeleninaElement = document.querySelector("#vysledek");
        const zeleninaDetailElement = document.createElement('div');
        zeleninaDetailElement.classList.add('zelenina');
        zeleninaElement.appendChild(zeleninaDetailElement);

        console.log(this.ziviny);

        // hlavicka s fotkou a měsícem výsevu
        let fotoElement = document.createElement('div');
        let imgElement = document.createElement('img');
       
        fotoElement.classList.add('foto');
        imgElement.src = "obrazky/" + this.obrazek;
        imgElement.alt = this.jmeno;
        imgElement.title = this.jmeno;

        fotoElement.appendChild(imgElement);
        zeleninaDetailElement.appendChild(fotoElement);

        // div podrobnosti se jmenem, sklízenou částí a sponem - maly
        let detailyElement = document.createElement('div');
        detailyElement.classList.add('detaily');
        zeleninaDetailElement.appendChild(detailyElement);

        //jméno zeleniny
        let jmenoZeleniny = document.createElement("h2");
        jmenoZeleniny.innerText = this.jmeno;
        detailyElement.appendChild(jmenoZeleniny);
        
        //plus pro výběr zeleniny
        if(this.vybrano){
            //mínus pro výběr zeleniny
            let minusElement = document.createElement('div');
            minusElement.classList.add('minus');
            minusElement.innerText = "-";
            minusElement.onclick = Vyber.uberZeleninu; //PROC TO NEFUNGUJE?
            detailyElement.appendChild(minusElement);
        } else {
            let plusElement = document.createElement('div');
            plusElement.classList.add('plus');
            plusElement.innerText = "+";
            plusElement.onclick = Vyber.pridejZeleninu; //PROC TO NEFUNGUJE?
            detailyElement.appendChild(plusElement);
        }
        
    }
  
  }
