const variables = require('./variables')
    
if (location.protocol === 'http:') {
    url = urlHttp;
} else {
    url = urlHttps;
}

const todayWeather = function () {
    let city = document.getElementById('city').value
    fetch(`${url}weather?q=${city}${variables.key}${variables.unit}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            const nowTimestamp = Math.floor(Date.now() / 1000)
            if ((nowTimestamp >= data.sys.sunrise && nowTimestamp <= data.sys.sunset) &&
                (nowTimestamp >= data.sys.sunrise || nowTimestamp < data.sys.sunset)) {
                document.querySelector('html').style.backgroundColor = '#89cff0';
                document.querySelector('#phone').style.backgroundColor = '#89cff0';
                //day
            } else {
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
module.exports = todayWeather;