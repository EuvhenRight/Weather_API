import { userViewWeather } from "../public/weatherPage.js";

let apiKey = 'af8ca98273d82bd5c384cedecf0f696c';


export const weatherSearch = async (city) =>{
    try {
        document.getElementById('city_search').innerText = 'Loading...';
        document.body.style.backgroundImage = 'none';

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            document.getElementById('city_search').innerText = 'error: city not found';
            document.body.style.backgroundImage = `url(./src/assets/backgrounds/default.png)` 
            throw new Error('City not found');
        }
        const data = await response.json();
        userViewWeather(data);
        
    } catch (error) {
        console.log(error);
        const errorElement = document.getElementById('city_search')
        errorElement.classList.add('error');
        document.querySelector('error').innerText = 'Oops, something went wrong';
    }
}

