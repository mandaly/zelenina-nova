export default function showForecast(){
    const apiKey = "c62889b42e57bd437b92dfd0d7be83bc";
    const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast";
    let city = "Brno";

let queryForecast = fetch(`${forecastUrl}?APPID=${apiKey}&q=${city}&units=metric&lang=cz`);

queryForecast
.then(response => response.json())
.then(displayForecast); //tuhle funkci zavolá, až bude splněná podmínka

function displayForecast(data){
let forecastEl = document.querySelector("#forecast");
let tr = document.createElement('tr');
let tr1 = document.createElement('tr');
let tr2 = document.createElement('tr');
let tr3 = document.createElement('tr');

forecastEl.appendChild(tr);
forecastEl.appendChild(tr1);
forecastEl.appendChild(tr2);
forecastEl.appendChild(tr3);

//console.log(data.list);
data.list.forEach(weather => {
    let tdDate = document.createElement('td');
    tdDate.innerText = weather.dt_txt;
    tr.appendChild(tdDate);

    let tdTemp = document.createElement('td');
    tdTemp.innerText = weather.main.temp + "°C";
    tr1.appendChild(tdTemp);

    let tdWet = document.createElement('td');
    tdWet.innerText = weather.weather[0].description;
    tr2.appendChild(tdWet);

    let tdIcon = document.createElement('td');
    let iconEl = document.createElement('img');
    iconEl.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    tr3.appendChild(tdIcon);
    tdIcon.appendChild(iconEl);
});
}
     
}