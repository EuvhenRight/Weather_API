import { userViewWeather } from "../public/weatherPage.js";

let apiKey = '58dfe517b5c842d481b274cda84d70f9';


export const weatherSearch = async (city) =>{
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            document.getElementById('city_search').innerText = 'Weather not found';
            throw new Error('Weather not found');
        }
        const data = await response.json();
        userViewWeather(data);
    } catch (error) {
        console.log(error);
        document.getElementById('city_search').innerText = 'Oops, something went wrong';
    }
}
