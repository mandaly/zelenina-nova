export default function showWeather(){
    const apiKey = "c62889b42e57bd437b92dfd0d7be83bc";
    const aktualniUrl = "https://api.openweathermap.org/data/2.5/weather";
    let city = "Brno";
    let lat = "";
    let lon = "";

    if ("geolocation" in navigator) {
        //geolokace je dostupná a získáme souřadnice:
        navigator.geolocation.getCurrentPosition(
            position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log(position.coords.latitude, position.coords.longitude); 
            console.log('získal jsem souřadnice');
            //PROČ SE TO NEZOBRAZÍ?
        });
    } else {
        console.log ("Smůla");
    };

    let queryAktualni;
    
    if (lon){
        queryAktualni = fetch(`${aktualniUrl}?APPID=${apiKey}&lat=${lat}&lon=${lon}&units=metric&lang=cz`);

    } else {
        queryAktualni = fetch(`${aktualniUrl}?APPID=${apiKey}&q=${city}&units=metric&lang=cz`);

    }
    
    queryAktualni
        .then(response => response.json())
        .then(displayWeather); //tuhle funkci zavolá, až bude splněná podmínka

    function displayWeather(data){
        if(lon){
            document.querySelector("#mesto").textContent = "Aktuální polohu";
        } else {
            document.querySelector("#mesto").textContent = city;
        };   
        
        const weatherEl = document.querySelector("#pocasi");
        const tempEl = document.querySelector("#teplota");
        const iconEl = document.querySelector("#icon");

        //console.log(data);

        weatherEl.textContent = data.weather[0].description;
        tempEl.textContent = data.main.temp + "°C";
        iconEl.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    }
       
    
}