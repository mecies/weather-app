
// api key : 2e4a4f77f480288401ccf9dc0dea9a0c


document.getElementById('search').addEventListener('click', getWeatherForecast);



function getWeatherForecast() {
    let city = document.getElementById('city').value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2e4a4f77f480288401ccf9dc0dea9a0c&units=metric`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data)
        document.getElementById('forecast').innerHTML =
         "<p id = cityAPI>"+data.name+"</p>" + 
        "<br/>" + "<p id=temperature>" + Math.floor(data.main.temp) + "°" +
        "</p>";
    })
    .catch((err)=>{
        console.log(error);
    });
    
}
