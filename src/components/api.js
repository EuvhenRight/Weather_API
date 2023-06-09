import { jokeProgramming } from "./joke.js";
import { userViewWeather } from "../weatherPage.js";

let apiKey = 'af8ca98273d82bd5c384cedecf0f696c';

export const getJoke = async () =>{
    try {
        const jokeResponse = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');

        if (!jokeResponse.ok) {
            throw new Error(` ${jokeResponse.status}: ${jokeResponse.statusText}`);
          }
        const data = await jokeResponse.json();
            jokeProgramming(data);
    } catch (error) {
        const element = document.createElement('div');
        element.id='joke';
        document.body.prepend(element); 
        const errorElement = document.getElementById('joke')
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
            errorElement.innerText = 'Error: Please check your internet connection.';
          } else {
            console.log(error);
            errorElement.innerText = error;
          }
    }
}

export const getWeather = async (city) =>{
    try {
        document.getElementById('city_search').innerText = 'Loading...';
        document.body.style.backgroundImage = 'none';

        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&units=metric&appid=${apiKey}`);
        if (!weatherResponse.ok) {
           
            throw new Error(`${weatherResponse.status} ${weatherResponse.statusText}`);
        }
        const data = await weatherResponse.json();
        userViewWeather(data);
        await getJoke();

    } catch (error) {
        const jokeElement = document.getElementById('joke');
        jokeElement ? jokeElement.remove() : null;
        const errorElement = document.getElementById('city_search');
        errorElement.style.fontSize = '1.3rem';
        errorElement.style.color = 'red';
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
            errorElement.innerText = 'Error: Please check your internet connection.';
          } else {
            console.log(error);
            errorElement.innerText = error;
          }
    }
}