import { BUTTON_SEARCH_ID, 
    CITY_SEARCH_ID, 
    HUMIDITY_ID, 
    ICON_WEATHER_ID, 
    TEMPERATURE_CELSIUS_ID, 
    WIND_SPEED_ID,
    STATUS_WEATHER_ID, 
    DATA_ID,
    INPUT_CITY_ID,
    MAX_MIN_TEMPERATURE_ID,
    TEMPERATURE_FEELS_ID} from "./constants.js";

/**
 * Create the main screen
 * @returns {Element}
 */
export const weatherInterface = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
    <div class="weather_top">
        <div class="weather_description">
            <div class="wind">
            <span id="${WIND_SPEED_ID}">km/h</span>
                <img src="./src/assets/weather_icons/animated/wind.png" alt="">
            </div>
            <div class="temperature">
                <h1 id="${TEMPERATURE_CELSIUS_ID}" class="celsius">--°C</h1>
                <span id="${TEMPERATURE_FEELS_ID}"></span>
                <span id="${MAX_MIN_TEMPERATURE_ID}"></span>
                <img id="${ICON_WEATHER_ID}" class="icon_weather" src="./src/assets/weather_icons/animated/clear.svg" alt="">
                <span id="${STATUS_WEATHER_ID}">Cloudy</span>
            </div>
            <div class="humidity">
            <span id="${HUMIDITY_ID}">km/h</span>
                <img src="./src/assets/weather_icons/animated/humidity.png" alt="">
            </div>
            </div>
        </div>
    <div class="weather_bottom">
        <div class="loading">
            <input type="text" placeholder="Search" id="${INPUT_CITY_ID}">
            <button id="${BUTTON_SEARCH_ID}">Search</button>
            <div class="city_view">
                <h1 id="${CITY_SEARCH_ID}"></h1>
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
                <div id="${DATA_ID}" class="date">date</div>
            </div>
    </div>`;
    
    return element;
  };