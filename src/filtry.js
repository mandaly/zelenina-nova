export default class Filtry {

    constructor() {
      //co tu bude?
    }

    ukazVse(){
        //vymaže to co tam je
        vysledek.innerHTML = "";
        schovat();
    
        //VYMAZAT POLÍČKA FILTRŮ
        document.querySelector('form').reset();
    
    //ukáže vyfiltrovanou zelelninu - PROČ PŘESTANE FUNGOVAT MOŽNOST ROZKLINOUT NA DETAIL?
    ukazVybrane(){
        //vymaže to co tam je
        vysledek.innerHTML = "";
        schovat();

        if (nalezenaZelenina.length > 0){
            for (let i = 0; i < nalezenaZelenina.length; i ++){
            vysledek.appendChild(ukazZeleninu(nalezenaZelenina[i]));
            }       
        } else {
            vysledek.textContent = "Smůla, nic jsme nenašli";
        }
    }

    //hledací filtry
    hledat(){
        let hledaniNazev = document.querySelector("#jmeno").value.toLowerCase();
        let tipZahonu = document.querySelector("#zahony").value;
        let sklizeno = document.querySelector("#sklizeno").value;
        let mesicVysevu = document.querySelector("#mesic").value;
        let potrebujeOporu = document.querySelector("#opora").value;
        let potrebujePrikryt = document.querySelector("#prikryti").value;
        let kamVyset = document.querySelector("#vysev").value;

        //hledáme podle jména zeleniny - NEFUNGUJE, POKUD UŽ JE NĚCO NAKLIKANO VE FILTRECH
        nalezenaZelenina = zelenina.filter( zelenina => zelenina.jmeno.toLowerCase().includes(hledaniNazev));

        //hledáme podle tipu zahonu
        if (tipZahonu !== "") {
            nalezenaZelenina = nalezenaZelenina.filter(zelenina => zelenina.ziviny.includes(tipZahonu));
        }

        //hledáme podle toho co sklizime
        if (sklizeno !== "") {
            nalezenaZelenina = nalezenaZelenina.filter(zelenina => zelenina.sklizeno === sklizeno );
        }

        //hledáme podle měsíce výsevu
        if (mesicVysevu !== "") {
            nalezenaZelenina = nalezenaZelenina.filter(zelenina => zelenina.vyseti == mesicVysevu );
        }

        //potřebuje oporu
        if (potrebujeOporu !== "") {
            nalezenaZelenina = nalezenaZelenina.filter(zelenina => zelenina.opora === potrebujeOporu );
        }

        //potřebuje přikrýt
        if (potrebujePrikryt !== "") {
            nalezenaZelenina = nalezenaZelenina.filter(zelenina => zelenina.prikryti === potrebujePrikryt );
        }

        //potřebuje předpěstovat
        if (kamVyset !== "") {
            nalezenaZelenina = nalezenaZelenina.filter(zelenina => zelenina.predpestovat === kamVyset );
        }
        
        ukazVybrane();
    }

}