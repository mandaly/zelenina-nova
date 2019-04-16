//napsat znovu:-() https://openweathermap.org/forecast16

export default function showForecast(){
    const apiKey = "c62889b42e57bd437b92dfd0d7be83bc";
    const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast";
    let city = "Brno";

    let forecastEl = document.querySelector("#forecast");
    let weather = [];

    getWeather();
    showWeather();

}

async function getWeather(){
    //fetch(`${forecastUrl}?APPID=${apiKey}&q=${city}&units=metric&lang=cz`);
    let response = await fetch(`${forecastUrl}?APPID=${apiKey}&q=${city}&units=metric&lang=cz`);
    let data = await response.json();

    weather = data;

    return data.results.map(weather => {
        return {
            date = weather.dt_txt,
            temp = weather.main.temp,
            weather = weather.weather[0].description,
            img = weather.weather[0].icon,
        }
    })
}

function showWeather(){
    let html = "";
    html = weather.reduce((total, forecast) => {
        return total + `<div class="planet">
        <div class="planet__name">${weather.date}</div>
        <div class="planet_count">${weather.temp}<i class="fas fa-child"></i></div>
        </div>`;
    }, "" ) //začíná se s prázdným řetězcem
    forecastEl.innerHTML = html;
}