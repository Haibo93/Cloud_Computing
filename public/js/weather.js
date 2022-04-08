// Send GET request to API with latitutde & longtitude, API key, and units parameters
// Function then calls drawWeather function to parse the JSON response
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

// Run the function when page is entirely loaded
window.onload = function() {
    weatherBalloon();
}

// Function receives json representation of API response and maps to the placeholder elements in HTML
function drawWeather(d) {
    document.getElementById('weather-location').innerHTML = ' in London, United Kingdom';
    document.getElementById('weather-description').innerHTML = 'and ' + d.weather[0].description;
    document.getElementById('weather-temp').innerHTML = "It's currently " + d.main.temp + '\xB0C';
}