const variables = require('./variables')



const weatherForecast = function() {
    let city = document.getElementById('city').value
    fetch(`${variables.url}forecast?q=${city}${variables.key}${variables.unit}&cnt=22`)
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
module.exports = weatherForecast;