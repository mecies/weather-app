
// api key : 2e4a4f77f480288401ccf9dc0dea9a0c
//doesnt work yet
document.getElementById('search').addEventListener('click', getWeatherForecast);

function getWeatherForecast() {
    fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2e4a4f77f480288401ccf9dc0dea9a0c&units=metric')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    
}
//api.openweathermap.org/data/2.5/weather?q=London&units=metric

//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2e4a4f77f480288401ccf9dc0dea9a0c&units=metric



