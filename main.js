
// api key : 2e4a4f77f480288401ccf9dc0dea9a0c


document.getElementById('search').addEventListener('click', getWeatherForecast);

function getWeatherForecast() {
    let city = document.getElementById('city').value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2e4a4f77f480288401ccf9dc0dea9a0c&units=metric`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)

            const nowTimestamp = Math.floor(Date.now() / 1000)
            console.log(nowTimestamp)
            if ((nowTimestamp >= data.sys.sunrise && nowTimestamp <= data.sys.sunset)
             && (nowTimestamp >= data.sys.sunrise || nowTimestamp < data.sys.sunset)) {
                document.querySelector('html').style.backgroundColor = '#FFEBCD';
                document.querySelector('#phone').style.backgroundColor = '#FFEBCD';
                //day
            }
            else{
                //night
                document.querySelector('html').style.backgroundColor = '#5d839c';
                document.querySelector('#phone').style.backgroundColor = '#5d839c';
            }

            document.getElementById('forecast').innerHTML =
                "<p id = cityAPI>" + data.name + "</p>" +
                "<br/>" + "<p id=temperature>" + Math.floor(data.main.temp) + "°" +
                "</p>" + "<p id=windspeed>" +
                "wind speed: " + data.wind.speed + " km/h" + "</p>";
        })
        .catch((err) => {
            console.log(err);
        });

}

