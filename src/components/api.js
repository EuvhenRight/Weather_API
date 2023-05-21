import { jokeProgramming } from "./joke.js";
import { userViewWeather } from "../weatherPage.js";

let apiKey = 'af8ca98273d82bd5c384cedecf0f696c';


export const weatherSearch = async (city) =>{
    try {
        document.getElementById('city_search').innerText = 'Loading...';
        document.body.style.backgroundImage = 'none';

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&units=metric&appid=${apiKey}`);
        if (!response.ok) {
           
            throw new Error('Wrong city');
        }
        const data = await response.json();
        userViewWeather(data);
        
    } catch (error) {
        console.log(error);
        const errorElement = document.getElementById('city_search')
        if (error.message === 'Wrong city') {
            errorElement.innerText = 'Error 404: City not found. Please check the spelling and try again.';
        } else {
            errorElement.innerText = 'An error occurred. Please try again later.';
        }
    }
}

export const jokeSearch = async () =>{
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
        const jokeData = await response.json();
            jokeProgramming(jokeData);
    } catch (error) {
        const errorElement = document.getElementById('joke')
        console.log(error.message);
        errorElement.innerText = error.message;
    }
}