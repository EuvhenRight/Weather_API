import { getJoke, getWeather } from "./src/components/api.js";
import { initWeatherPage } from "./src/weatherPage.js";



const loadApp = () => {
  
    initWeatherPage();
    getWeather('Amsterdam');
  };
  
  window.addEventListener('load', loadApp);