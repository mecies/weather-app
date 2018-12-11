const weatherFunctions = require('./weatherFunctions')

function keypressHandler(e) {
    let key = e.which || e.keyCode;
    if (key === 13) {
        weatherFunctions.todayWeather();
        weatherFunctions.forecastWeather();
    } else {
        return
    }
}

module.exports = keypressHandler