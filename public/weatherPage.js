import {weatherInterface} from "../src/weatherView.js";
import {BUTTON_SEARCH_ID, CITY_SEARCH_ID, HUMIDITY_ID, ICON_WEATHER_ID, STATUS_WEATHER_ID, TEMPERATURE_CELSIUS_ID, weatherIcons, WIND_SPEED_ID} from "../src/constants.js";
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
    const {temp, humidity} = data.main;
    const {description, main} = data.weather[0];
    const {speed} = data.wind;

    document.getElementById(ICON_WEATHER_ID)
    .src = `./src/assets/weather_icons/animated/${main}.svg`

 document.getElementById(CITY_SEARCH_ID).innerText = `${name.toUpperCase()}, ${country}`;
 document.getElementById(TEMPERATURE_CELSIUS_ID).innerText = `${Math.round(temp)} °C`;
 document.getElementById(HUMIDITY_ID).innerText = `${humidity} %`;
 document.getElementById(STATUS_WEATHER_ID).innerText = `${description.toUpperCase()}`;
 document.getElementById(WIND_SPEED_ID).innerText = `${Math.round(speed)} km/h`;

 document.body.style.backgroundImage =
      `url(./src/assets/backgrounds/${main}.jpeg)`;

 const searchFunc = () => {
  weatherSearch(document.getElementById('input_city').value);
};

 document.getElementById(BUTTON_SEARCH_ID).addEventListener('click', searchFunc);

 document.getElementById('input_city').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
   searchFunc();
   document.getElementById('input_city').value='';
  }
 })
 }

