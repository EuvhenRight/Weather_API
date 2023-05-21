import { jokeSearch, weatherSearch } from "./src/components/api.js";
import { initWeatherPage } from "./src/weatherPage.js";



const loadApp = () => {
  
    initWeatherPage();
    weatherSearch('Amsterdam');
    jokeSearch();
  };
  
  window.addEventListener('load', loadApp);