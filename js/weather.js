"use strict";
const API_KEY = config.apikey;
function onGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const location = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        console.log(data.name, data.weather[0].main);
        if (location instanceof HTMLElement) {
            location.innerText = data.name;
        }
        if (weather instanceof HTMLElement) {
            weather.innerText = `${data.main.temp} C - ${data.weather[0].main}`;
        }
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
