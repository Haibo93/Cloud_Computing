function weatherBalloon() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=0.1276&appid=c0caf55ac81d56aa0ed5275c2988f7f3&units=metric')
    .then(function(resp) {return resp.json() })
    .then(function(data) {
        drawWeather(data);
    })
    .catch(function() {
        //errors
    })
}

window.onload = function() {
    weatherBalloon();
}

function drawWeather(d) {
    document.getElementById('weather-location').innerHTML = 'London';
    document.getElementById('weather-description').innerHTML = d.weather[0].description;
    document.getElementById('weather-temp').innerHTML = d.main.temp + '\xB0C';
}