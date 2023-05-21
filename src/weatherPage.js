import {weatherInterface} from "./components/weatherView.js";
import {BUTTON_SEARCH_ID, 
  DATA_ID,
  CITY_SEARCH_ID,  
  HUMIDITY_ID, 
  ICON_WEATHER_ID, 
  INPUT_CITY_ID, 
  JOKE_ID, 
  MAX_MIN_TEMPERATURE_ID, 
  STATUS_WEATHER_ID, 
  TEMPERATURE_CELSIUS_ID, 
  TEMPERATURE_FEELS_ID, 
  weatherIcons, 
  WIND_SPEED_ID} from "./constants.js";

import { searchFunc } from "./components/search.js";
import { addTodayClass, getCreatedDate } from "./components/date.js";

// TODO: Add HTML elements

export const initWeatherPage = () => {
    const userInterface = document.getElementById('user_interface');
    userInterface.innerHTML = '';
  
    const weatherElementApp = weatherInterface();
    userInterface.appendChild(weatherElementApp);

  };

// TODO: Add working logic
  export const userViewWeather = (data) => {
    const { name } = data;
    const { country } = data.sys;
    const {temp, feels_like, temp_min, temp_max, humidity} = data.main;
    const {description, main} = data.weather[0];
    const {speed} = data.wind;
    console.log(data);

// TODO: change icon
  weatherIcons.includes(main)
  ?  document.getElementById(ICON_WEATHER_ID)
  .src = `./src/assets/weather_icons/animated/${main}.svg`
  : document.getElementById(ICON_WEATHER_ID)
  .src = `./src/assets/weather_icons/animated/Cloudy.svg`


// TODO: added weather data

  const temperatureElement = document.getElementById(TEMPERATURE_CELSIUS_ID);
  const temperatureFeelsElement = document.getElementById(TEMPERATURE_FEELS_ID);
  const temperatureMinMaxElement = document.getElementById(MAX_MIN_TEMPERATURE_ID);

 document.getElementById(CITY_SEARCH_ID).innerText = `${name.toUpperCase()}, ${country}`;
 
 temperatureElement.innerText = `${Math.round(temp)} °C`;
 temperatureFeelsElement.innerText = `feels ${Math.round(feels_like)} °C`;
 temperatureMinMaxElement.innerText = `${Math.round(temp_min)} °C / ${Math.round(temp_max)} °C`;
 document.getElementById(HUMIDITY_ID).innerText = `${humidity} %`;
 document.getElementById(STATUS_WEATHER_ID).innerText = `${description.toUpperCase()}`;
 document.getElementById(WIND_SPEED_ID).innerText = `${Math.round(speed)} km/h`;

// TODO: change temperature C to F

let isCelsius = true;

temperatureElement.addEventListener('click', () => {
  
  if (isCelsius) {
    temperatureElement.innerText = `${Math.round(temp * 9/5) + 32} °F`;
    temperatureFeelsElement.innerText = `feels ${Math.round(feels_like* 9/5) + 32} °F`;
    temperatureMinMaxElement.innerText = `${Math.round(temp_min * 9/5) + 32} °F / ${Math.round(temp_max * 9/5) + 32} °F`;
    isCelsius = false;
  } else {
    temperatureElement.innerText = `${Math.round(temp)} °C`;
    temperatureFeelsElement.innerText = `feels ${Math.round(feels_like)} °C`;
    temperatureMinMaxElement.innerText = `${Math.round(temp_min)} °C / ${Math.round(temp_max)} °C`;
    isCelsius = true;
  }
});

// TODO:change background

weatherIcons.includes(main) 
? document.body.style.backgroundImage = `url(./src/assets/backgrounds/${main}.jpeg)`
: document.body.style.backgroundImage = `url(./src/assets/backgrounds/default.png)` 

// TODO: search city function

const buttonSearch = document.getElementById(BUTTON_SEARCH_ID) 

buttonSearch.addEventListener('click', () => {
  searchFunc();
});

  document.getElementById(INPUT_CITY_ID).addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      searchFunc();
    }
  });


// TODO: added date
  let now = new Date();
  let date = document.getElementById(DATA_ID);
  date.innerText = getCreatedDate(now);

  addTodayClass(now);
};