// JSON CONFIG

const config = {
  "name": "uwu nyaaa >//< ", //Your name which will be used to greet you 
  "weather": [
    {
      "API_KEY": "q48tggq389g7b_yourApiKey", //Get one from openweathermap.org
      "City_Name": "London",          // Default location is L*ndon | get your city's latitude and longitude in https://openweathermap.org/find
      "latitude": "51.5085",   // Your City's latitude
      "longitude": "0.1257"    // Your City's longitude
    }
  ]
}

// Actual normal javascript
//GREETINGS

const name = `${config.name}`

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning, ' + name + '!';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon, ' + name + '!';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening, ' + name + '!';

document.getElementById('greetings').innerHTML = '<h1>' + greet + '</h1>';


//WEATHER
// OpenWeather API key
const API_KEY = `${config.weather[0].API_KEY}`;

// Fetch API URL
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';

// Current city name
const CURRENT_CITY = `${config.weather[0].City_Name}`;
const lat = `${config.weather[0].latitude}`;
const long = `${config.weather[0].longitude}`;

// Define an object to hold weather data
var WEATHER_OBJECT = {};

// Make API call and get weather data
async function getWeatherData(city) {
  const response = await fetch(API_URL + 'lat=' + lat + '&lon=' + long + '&appid=' + API_KEY);
  const data = await response.json();
  WEATHER_OBJECT = data;
  return WEATHER_OBJECT;
}

// Get current weather data
async function getCurrentWeather() {
  const weatherData = await getWeatherData(CURRENT_CITY);

  const temperatureC = Math.round((weatherData.main.temp - 273.15) * 10) / 10;

  const weather = `<h3> <b><span class="fa-solid fa-temperature-three-quarters"></span> ${temperatureC}°C | ${weatherData.weather[0].main}</b></h3>`

  document.querySelector('#container').innerHTML = weather;
}

getCurrentWeather().then(() => { console.log('Weather successfully retrieved!'); });

