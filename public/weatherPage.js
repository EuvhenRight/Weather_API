import {weatherInterface} from "../src/weatherView.js";
import {BUTTON_SEARCH_ID, 
  CITY_SEARCH_ID, 
  DATA_ID, 
  HUMIDITY_ID, 
  ICON_WEATHER_ID, 
  INPUT_CITY_ID, 
  MAX_MIN_TEMPERATURE_ID, 
  STATUS_WEATHER_ID, 
  TEMPERATURE_CELSIUS_ID, 
  TEMPERATURE_FEELS_ID, 
  WIND_SPEED_ID} from "../src/constants.js";

import { weatherSearch } from "../src/api.js";


export const initWeatherPage = () => {
    const userInterface = document.getElementById('user_interface');
    userInterface.innerHTML = '';
  
    const weatherElementApp = weatherInterface();
    userInterface.appendChild(weatherElementApp);
  };


  //working logic
  export const userViewWeather = (data) => {
    const { name } = data;
    const { country } = data.sys;
    const {temp, feels_like, temp_min, temp_max, humidity} = data.main;
    const {description, main} = data.weather[0];
    const {speed} = data.wind;

    // change icon
    if (main === undefined) {
      document.getElementById(ICON_WEATHER_ID)
    .src = `./src/assets/weather_icons/animated/default.svg`
    }

    document.getElementById(ICON_WEATHER_ID)
    .src = `./src/assets/weather_icons/animated/${main}.svg`

    // added weather date
 document.getElementById(CITY_SEARCH_ID).innerText = `${name.toUpperCase()}, ${country}`;
 document.getElementById(TEMPERATURE_CELSIUS_ID).innerText = `${Math.round(temp)} °C`;
 document.getElementById(TEMPERATURE_FEELS_ID).innerText = `feels: ${Math.round(feels_like)} °C`;
 document.getElementById(MAX_MIN_TEMPERATURE_ID).innerText = `${Math.round(temp_min)} °C / ${Math.round(temp_max)} °C`;
 document.getElementById(HUMIDITY_ID).innerText = `${humidity} %`;
 document.getElementById(STATUS_WEATHER_ID).innerText = `${description.toUpperCase()}`;
 document.getElementById(WIND_SPEED_ID).innerText = `${Math.round(speed)} km/h`;

// change background
if (main === undefined) {
  document.body.style.backgroundImage =
  `url(./src/assets/backgrounds/default.png)`;
}

 document.body.style.backgroundImage =
      `url(./src/assets/backgrounds/${main}.jpeg)`;

      const searchFunc = () => {
        const inputCity = document.getElementById(INPUT_CITY_ID);
        const cityValue = inputCity.value;
      
        // Clear the input field
        inputCity.value = '';
      
        // Perform the weather search using the city value
        weatherSearch(cityValue);
      }
      
      document.getElementById(BUTTON_SEARCH_ID).addEventListener('click', () => {
        searchFunc();
      });

  document.getElementById(INPUT_CITY_ID).addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      searchFunc();
    }
  });


const getCreatedDate = (dateNow) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    let day = days[dateNow.getDay()];
    let date = dateNow.getDate();
    let month = months[dateNow.getMonth()];
    let year = dateNow.getFullYear();

    
  
    return `${date} ${month} ${year}`;
  }

let now = new Date();
let date = document.getElementById(DATA_ID);
date.innerText = getCreatedDate(now);

const addTodayClass = () => {
  const weekdays = document.querySelectorAll('.weekday');
  weekdays.forEach((weekday) => {
    if (weekday.innerText === now.toLocaleDateString('en-US', { weekday: 'long' })) {
      weekday.classList.add('today');
    }
  });
}

addTodayClass();

}