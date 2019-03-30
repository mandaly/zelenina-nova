export default class Zelenina {

    constructor(jmeno, obrazek, sklizeno, vyseti, sklizeni, ziviny, prikryti, opora, predpestovat, pocet, vzdalenostDelka, vzdalenostSirka, meziradek, kamaradi, nepratele) {
        this.jmeno = jmeno;
        this.obrazek = obrazek;
        this.sklizeno = sklizeno;
        this.vyseti = vyseti;
        this.sklizeni = sklizeni;
        this.ziviny = [];
        this.prikryti = prikryti;
        this.opora = opora;
        this.predpestovat = predpestovat;
        this.pocet = pocet;
        this.vzdalenostDelka = vzdalenostDelka;
        this.vzdalenostSirka = vzdalenostSirka;
        this.meziradek = meziradek;
        this.kamaradi = [];
        this.nepratele = [];
    }

    renderHTML(){
        let zeleninaDetailElement = document.createElement("div");
        zeleninaDetailElement.classList.add("zelenina-detail");
        document.querySelector("#detail").appendChild(zeleninaDetailElement);
        
        // hlavicka s fotkou a měsícem výsevu
        let fotoElement = document.createElement('div');
        let imgElement = document.createElement('img');
        fotoElement.classList.add('foto');
        imgElement.src = "obrazky/" + this.obrazek;
        imgElement.alt = this.jmeno;
        imgElement.title = this.jmeno;

        fotoElement.appendChild(imgElement);
        zeleninaDetailElement.appendChild(fotoElement);

        //dodělat funkci schovat!!!!
        let schovatElement = document.createElement("div");
        schovatElement.classList.add("vyseti");
        schovatElement.innerText = "X";
        
        fotoElement.appendChild(schovatElement);
        //schovatElement.onclick = schovat;

        //div s agro lhůtama
        let agroElement = document.createElement("div");
        let agroFlexElement = document.createElement("div");
        let jmenoZeleniny = document.createElement("h2");
        agroElement.classList.add("detaily");
        agroFlexElement.classList.add("flex");
        
        zeleninaDetailElement.appendChild(agroElement);
        agroElement.appendChild(jmenoZeleniny);
        agroElement.appendChild(agroFlexElement);

            //agrolhůty - nadpis
            let agroPozadavkyElement = document.createElement("div");
            let agroPozadavkyNadpis = document.createElement("h3");
            agroPozadavkyElement.classList.add("pozadavky");
            agroPozadavkyNadpis.innerText = "Agro lhůty";
            
            agroFlexElement.appendChild(agroPozadavkyElement);
            agroPozadavkyElement.appendChild(agroPozadavkyNadpis);
            
        
            //kdy vyset
            let radekVyseti = document.createElement("p");
            let radekVysetiImg = document.createElement("img");
            let spanVyseti = document.createElement("span");
            radekVysetiImg.src = "obrazky/vyset.png";
            radekVysetiImg.alt = "vysetí";
            radekVysetiImg.title = "kdy vyset";
            spanVyseti.innerText = ": " + this.vyseti;
            
            agroPozadavkyElement.appendChild(radekVyseti);
            radekVyseti.appendChild(radekVysetiImg);
            radekVyseti.appendChild(spanVyseti);
        
            //kdy sklidit
            let radekSklizeni = document.createElement("p");
            let spanSklizeni = document.createElement("span");
            let radekSklizeniImg = document.createElement("img");
            radekSklizeniImg.src = "obrazky/sklidit.png";
            radekSklizeniImg.alt = "sklizení";
            radekSklizeniImg.title = "kdy sklidit";
            spanSklizeni.innerText = ": " + this.sklizeni;

            agroPozadavkyElement.appendChild(radekSklizeni);
            radekSklizeni.appendChild(radekSklizeniImg);
            radekSklizeni.appendChild(spanSklizeni);
        
            //co sklidit
            let radekCastZeleniny= document.createElement("p");
            let spanCastZeleniny = document.createElement("span");
            let radekCastZeleninyImg = document.createElement("img");
            if (this.sklizeno === "list"){
                radekCastZeleninyImg.src = "obrazky/list.png";
            } else if (this.sklizeno === "plod"){
                radekCastZeleninyImg.src = "obrazky/plod.png";
            } else if (this.sklizeno === "kořen"){
                radekCastZeleninyImg.src = "obrazky/koren.png";
            } else if (this.sklizeno === "květ"){
                radekCastZeleninyImg.src = "obrazky/kvet.png";
            } 
            radekCastZeleninyImg.alt = "sklízeno";
            radekCastZeleninyImg.title = "co sklidit";
            spanCastZeleniny.innerText = this.sklizeno;

            agroPozadavkyElement.appendChild(radekCastZeleniny);
            radekCastZeleniny.appendChild(radekCastZeleninyImg);
            radekCastZeleniny.appendChild(spanCastZeleniny);

        //pdiv s ožadavky
        let pozadavkyElement = document.createElement("div");
        let pozadavkyNadpis = document.createElement("h3");
        pozadavkyElement.classList.add("pozadavky");
        agroFlexElement.appendChild(pozadavkyElement); 
        pozadavkyElement.appendChild(pozadavkyNadpis);
        pozadavkyNadpis.innerText = "Požadavky";

            //spon
            let radekSpon = document.createElement("p");
            let spanSpon = document.createElement("span");
            let sponImg = document.createElement("img");
            sponImg.src = "obrazky/misto.png";
            sponImg.alt = "spon";
            sponImg.title = "spon";
            spanSpon.innerText = ": " + this.vzdalenostDelka + " cm x " + this.vzdalenostSirka + " cm";
            pozadavkyElement.appendChild(radekSpon);
            radekSpon.appendChild(sponImg);
            radekSpon.appendChild(spanSpon);

            //pokud to může být meziřádek
            if (this.meziradek === "A") {
                let radekMezi = document.createElement("p"); 
                let radekMeziImg = document.createElement("img");
                let spanMezi = document.createElement("span");
                spanMezi.innerText = "Můžeš použít jako meziřádek";
                radekMeziImg.src = "obrazky/meziradky.jpg";
                radekMeziImg.alt = "meziřádek";
                radekMeziImg.title = "meziřádek";
                pozadavkyElement.appendChild(radekMezi);
                radekMezi.appendChild(radekMeziImg);
                radekMezi.appendChild(spanMezi);
                
            } 

            //pokud potřebuje oporu 
            if (this.opora === "A") {
                let radekOpora = document.createElement("p"); 
                let radekOporaImg = document.createElement("img");
                let spanOpora = document.createElement("span");
                radekOporaImg.src = "obrazky/opora.png";
                radekOporaImg.alt = "opora";
                radekOporaImg.title = "opora";
                spanOpora.innerText = "Potřebuje oporu";
                
                pozadavkyElement.appendChild(radekOpora);
                radekOpora.appendChild(radekOporaImg); 
                radekOpora.appendChild(spanOpora);
                
            } 

            //pokud potřebuje předpěstovat
            if (this.predpestovat === "A") {
                let radekPredpestovat = document.createElement("p"); 
                let radekPredpestovatImg = document.createElement("img");
                let spanPredpestovat = document.createElement("span");
                radekPredpestovatImg.src = "obrazky/predpestovat.png";
                radekPredpestovatImg.alt = "předpěstuj";
                radekPredpestovatImg.title = "předpěstuj";
                spanPredpestovat.innerText = "Chce předpěstovat";
                
                radekPredpestovat.appendChild(radekPredpestovatImg);
                pozadavkyElement.appendChild(radekPredpestovat);
                radekPredpestovat.appendChild(spanPredpestovat);
            } 

            //pokud potřebuje přikrýt
            if (this.prikryti === "A") {
                let radekPrikryti = document.createElement("p"); 
                let spanPrikryti = document.createElement("span");
                let radekPrikrytiImg = document.createElement("img");
                radekPrikrytiImg.src = "obrazky/prikryti.png";
                radekPrikrytiImg.alt = "přikrej";
                radekPrikrytiImg.title = "přikrej";
                spanPrikryti.innerText = "Potřebuje přikrýt";
                
                radekPrikryti.appendChild(radekPrikrytiImg);
                radekPrikryti.appendChild(spanPrikryti);
                pozadavkyElement.appendChild(radekPrikryti);
                
            } 

        //div kamarádi
        let kamaradiElement = document.createElement("div");
        kamaradiElement.classList.add("pozadavky");
        agroFlexElement.appendChild(kamaradiElement);
        let kamaradiNadpis = document.createElement("h3");
        kamaradiElement.appendChild(kamaradiNadpis);
        kamaradiNadpis.innerText = "Vhodní sousedé";
        
            //seznam přátelských zelenin
            let kamaradiSeznam = document.createElement("ul");
            kamaradiElement.appendChild(kamaradiSeznam);

            for (let i = 0; i < this.kamaradi.length; i ++){
                    let kamarad = document.createElement("li");
                    kamarad.innerText = this.kamaradi[i];
                    kamaradiElement.appendChild(kamarad);

            }

        //div nepřátelé
        let neprateleElement = document.createElement("div");
        neprateleElement.classList.add("pozadavky");
        agroFlexElement.appendChild(neprateleElement);
        
            //seznam nepřátelských zelenin
            if (this.nepratele.length === 0){
                let hlaska = document.createElement("p");
                hlaska.innerText = "Dobrá zelenina! V zásadě můžeš vysadit s čímkoliv, nemá negativní vztah s nikým.";
                neprateleElement.appendChild(hlaska);
                
            } else {
                let neprateleNadpis = document.createElement("h3");
                let neprateleSeznam = document.createElement("ul");
                neprateleNadpis.innerText = "Rozhodně nesázej s:";
                neprateleElement.appendChild(neprateleNadpis);
                neprateleElement.appendChild(neprateleSeznam);
        
                for (let i = 0; i < this.nepratele.length; i ++){
                let nepritel = document.createElement("li");
                nepritel.innerText = this.nepratele[i];
                neprateleElement.appendChild(nepritel);
                }
            }

    }

    schovat(udalost){
        //jak to schovat?
        document.querySelector("#detail").innerHTML = "";
    }
  
  }