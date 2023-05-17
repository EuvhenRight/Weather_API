import {initWeatherPage} from "./public/weatherPage.js";
import {weatherSearch} from "./src/api.js";

const loadApp = () => {
  
    initWeatherPage();
    weatherSearch('London');
  };
  
  window.addEventListener('load', loadApp);