const timer = require('./src/timer')
const weatherFunctions = require('./src/weatherFunctions')
const keypressHandler = require('./src/keypress')

timer();

document.getElementById('search').addEventListener('click', ()=>{weatherFunctions.todayWeather(); weatherFunctions.forecastWeather()});
document.getElementById('city').addEventListener('keypress', keypressHandler);


