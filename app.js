import {initWeatherPage} from "./src/weatherPage.js";
import {jokeSearch, weatherSearch} from "./src/api.js";

const loadApp = () => {
  
    initWeatherPage();
    weatherSearch('Amsterdam');
    jokeSearch();
  };
  
  window.addEventListener('load', loadApp);