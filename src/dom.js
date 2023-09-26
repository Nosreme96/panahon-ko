import { locWeather } from "./function";

const homepage = (() => {
    const addBg = () => {
        const loc = document.createElement('label');
        loc.innerHTML = 'Enter city';
        loc.for = 'loc';
        loc.className = 'label-loc';
        const locinput = document.createElement('input');
        locinput.type = 'text';
        locinput.maxLength = 25;
        locinput.id = 'loc';
        const go = document.createElement('button');
        go.innerHTML = 'Go!';
        go.className = 'go-button';
        const inputarea = document.createElement('div');
        inputarea.id = 'inputarea';
        inputarea.append(loc, locinput, go);
        document.getElementById('content').append(inputarea);
        go.addEventListener('click', (e) => {
            e.preventDefault();
            let city = document.getElementById('loc').value;
            locWeather(city.toString());
        })
        const background = document.createElement('div');
        background.id = 'background';
        const weatherText = document.createElement('div');
        weatherText.id = 'weatherText';
        const feelText = document.createElement('div');
        feelText.id = 'feelText'
        const weatherImage = document.createElement('img');
        weatherImage.id = 'weatherImg';
        const tempText = document.createElement('div');
        tempText.id = 'tempText';
        const windText = document.createElement('div');
        windText.id = 'windText';
        const day_one = document.createElement('div');
        day_one.id =  'day1';
        const forecast = document.createElement('div');
        forecast.id = 'forecast';
        background.append(
             tempText
            ,feelText 
            ,weatherText  
            ,windText
            ,weatherImage  
            ,forecast 
        );
        let days = [1,2,3];
        days.forEach(element => {
            let day = document.createElement('div');
            day.className = 'forecastday';
            let date = document.createElement('div');
            date.id = `date-day${element}`;
            let high = document.createElement('div');
            high.className = 'high-temp';
            let img = document.createElement('img');
            img.id = `day${element}-img`;
            let low = document.createElement('div');
            low.className = 'low-temp'
            day.append(
                 date
                ,high
                ,img
                ,low
            );
            forecast.append(day);
            
        });
        document.getElementById('content').append(background);
    }
    return {addBg};
})();
export {homepage};