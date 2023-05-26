import {
  BUTTON_SEARCH_ID,
  CITY_SEARCH_ID,
  HUMIDITY_ID,
  ICON_WEATHER_ID,
  TEMPERATURE_CELSIUS_ID,
  WIND_SPEED_ID,
  STATUS_WEATHER_ID,
  DATA_ID,
  INPUT_CITY_ID,
  MAX_MIN_TEMPERATURE_ID,
  TEMPERATURE_FEELS_ID,
} from "./constants.js";

/**
 * Create the main screen
 * @returns {Element}
 */
export const weatherInterface = () => {
  const element = document.createElement("div");
  element.innerHTML = String.raw`
    <div class="weather_top">
        <div class="weather_description">
            <div class="wind">
            <span id="${WIND_SPEED_ID}" class="counter">--km/h</span> 
                <img src="./src/assets/other/wind.png" alt="wind">
                <br>wind speed</br>
            </div>
            <div class="temperature">
                <h1 id="${TEMPERATURE_CELSIUS_ID}" class="counter">--°C</h1>
                <span id="${TEMPERATURE_FEELS_ID}" class="counter"></span>
                <span id="${MAX_MIN_TEMPERATURE_ID}" class="counter"></span>
                <img id="${ICON_WEATHER_ID}" class="icon_weather" src="./src/assets/other/default.png" alt="icon_weather">
                <span id="${STATUS_WEATHER_ID}">--</span>
            </div>
            <div class="humidity">
            <span id="${HUMIDITY_ID}" class="counter">--%</span>
                <img src="./src/assets/other/humidity.png" alt="humidity">
                <br>humidity</br>
            </div>
            </div>
        </div>
    <div class="weather_bottom">
        <div class="loading">
        <span id="${DATA_ID}">--</span>
        <div class="search_box">
        </div>
        <div class="city_input">
            <input type="text" placeholder="City, Country" id="${INPUT_CITY_ID}">
            <button id="${BUTTON_SEARCH_ID}" class="counter" type="button"><i class="fa fa-search fa-1x" aria-hidden="true"></i></button>
        </div>
        </div>
            <div class="week">
                <ul class="weekdays">
                    <div class="weekday">Monday</div>
                    <div class="weekday">Tuesday</div>
                    <div class="weekday">Wednesday</div>
                    <div class="weekday">Thursday</div>
                    <div class="weekday">Friday</div>
                    <div class="weekday">Saturday</div>
                    <div class="weekday">Sunday</div>
                </ul>
                <div class="city_view">
                <h1 id="${CITY_SEARCH_ID}" class="counter">--></h1>
            </div>
         </div>
    </div>`;

  return element;
};
