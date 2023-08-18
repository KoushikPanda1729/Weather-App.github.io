
const API_KEY = "95ee471b6d533adfa6d0bcf58d69f4df";

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#Weather");



const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(API)
    const data = await response.json();
    return showWeather(data);
}


// Another Process ---------->

// const getWeather = (city) => {
//     const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//     fetch(API).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }



const showWeather = (data) => {

    if (data.cod === "404") {
        weather.innerHTML = `<h2>This city is not found</h2>`;
        return;
    }
    weather.innerHTML = ` <div>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div class="content">
<h2>${data.main.temp}℃</h2>
<h4>${data.weather[0].main}</h4>
</div>`
}



form.addEventListener("submit", (event) => {
    getWeather(search.value);
    event.preventDefault();
})

