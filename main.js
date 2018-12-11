const timer = require('./src/timer')
const variables = require('./src/variables');
const todayWeather = require('./src/weatherFunctions');
const forecastWeather = require('./src/weatherFunctions');

timer();

document.getElementById('search').addEventListener('submit', function(e){
    e.preventDefault();
    todayWeather();
    forecastWeather();
});


// let key = e.which || e.keyCode;
// if (key === 13) {
//     todayWeather();
//     forecastWeather();
// }
// else {
//     return
// }