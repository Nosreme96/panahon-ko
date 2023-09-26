import loading from './loading.gif';

async function locWeather(location) {
    document.getElementById('weatherImg').src = loading;
    document.getElementById('weatherImg').classList.add('load_small');
    let raw = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5f502717e15a446d81143538230509&q=${location}&days=3`, {
        mode: 'cors'
    });
    let parsed = await raw.json()
    document.getElementById('weatherText').innerHTML = parsed.current.condition.text;
    document.getElementById('weatherImg').src = `https:${parsed.current.condition.icon}`;
    document.getElementById('weatherImg').classList.remove('load_small');
    document.getElementById('feelText').innerHTML = `Feels like ${parsed.current.feelslike_c}`;
    document.getElementById('tempText').innerHTML = `${parsed.current.temp_c} C`;
    document.getElementById('windText').innerHTML = `${parsed.current.wind_kph} km/h ${parsed.current.wind_dir}`;
    let forecastdata = parsed.forecast.forecastday;
    let deets;
    for(let index = 0; index < forecastdata.length; index++){
        deets = forecastdata[index];
        document.getElementById(`date-day${index+1}`).innerHTML = deets.date.slice(5);
        document.getElementsByClassName('high-temp')[index].innerHTML = deets.day.maxtemp_c;
        document.getElementById(`day${index+1}-img`).src = `https:${deets.day.condition.icon}`;
        document.getElementsByClassName('low-temp')[index].innerHTML = deets.day.mintemp_c;
    }
    console.log('putangina');
    return parsed;
    };
function catchError(error){
    error => console.log(error + "\nCannot fetch data");
}
export {locWeather, catchError}