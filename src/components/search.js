import { jokeSearch, weatherSearch } from "./api.js";
import { INPUT_CITY_ID } from "./constants.js";
import { initWeatherPage } from "../weatherPage.js";



export const searchFunc = () => {
    const inputCity = document.getElementById(INPUT_CITY_ID);
    const cityValue = inputCity.value.trim();
    // Clear the input field
    inputCity.value = '';
  
    if (cityValue !== '') {
    // Perform the weather search using the city value
    weatherSearch(cityValue);
    initWeatherPage();
    jokeSearch();
    }
  }