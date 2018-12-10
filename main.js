
// api key : 2e4a4f77f480288401ccf9dc0dea9a0c

// timer
timer();

//search city
document.getElementById('search').addEventListener('click', getCurrentWeather);
document.getElementById('search').addEventListener('click', getWeatherForecast);
document.getElementById('city').addEventListener('keypress', function(e){
    let key = e.which || e.keyCode;
    if (key === 13){
        getCurrentWeather();
    }
    else{
        return
    }
});

// connect with api and display current weather
function getCurrentWeather() {
    let city = document.getElementById('city').value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2e4a4f77f480288401ccf9dc0dea9a0c&units=metric`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            const nowTimestamp = Math.floor(Date.now() / 1000)
            if ((nowTimestamp >= data.sys.sunrise && nowTimestamp <= data.sys.sunset)
             && (nowTimestamp >= data.sys.sunrise || nowTimestamp < data.sys.sunset)) {
                document.querySelector('html').style.backgroundColor = '#89cff0';
                document.querySelector('#phone').style.backgroundColor = '#89cff0';
                //day
            }
            else{
                //night
                document.querySelector('html').style.backgroundColor = '#5d839c';
                document.querySelector('#phone').style.backgroundColor = '#5d839c';
            }

            document.getElementById('currentWeather').innerHTML =
                "<p id = cityAPI>" + data.name + "</p>" +
                "<br/>" + "<p id=temperature>" + Math.round(data.main.temp) + "°" +
                "</p>" + "<p id=windspeed>" + 
                "wind speed: " + data.wind.speed + " km/h" + "</p>";
            
        })
        .catch((err) => {
            console.log(err);
        });
}
// get weather forecast
function getWeatherForecast() {
    let city = document.getElementById('city').value
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=2e4a4f77f480288401ccf9dc0dea9a0c&units=metric`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.getElementById('tomorrow').innerHTML = `tomorrow: <br/>${Math.round(data.list[5].main.temp)}° `;
            document.getElementById('in2days').innerHTML = `in 2 days: </br/>${Math.round(data.list[13].main.temp)}°`;
            document.getElementById('in3days').innerHTML = `in 3 days: <br/>${Math.round(data.list[21].main.temp)}°`;
        })
        .catch((err) => {
            console.log(err);
        });
}

//clock function
function timer() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    m = checkTime(m);

    document.getElementById('timer').innerHTML = `${h}:${m} ${ampm}`
    const t = setTimeout(timer, 1000);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

