const timer = require('./src/timer')
const variables = require('./src/variables');
const todayWeather = require('./src/todayWeather');
const weatherFoecast = require('./src/forecastWeather');

timer();

console.log(variables.url)

//search city
document.getElementById('search').addEventListener('click', todayWeather);
document.getElementById('search').addEventListener('click', weatherFoecast);
document.getElementById('city').addEventListener('keypress', function(e){
    let key = e.which || e.keyCode;
    if (key === 13){
       todayWeather();
    }
    else{
        return
    }
});


