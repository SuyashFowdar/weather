import appendElement from './library';

appendElement('h1', 'content', 'Weather');

function getWeather(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04d4d495e39f2311c4acd1148b6e2130`)
    .then(response => response.json());
}

function displayWeather(response) {
  const d = response.weather[0].description;
  const weather = {
    city: response.name,
    temp: (response.main.temp - 273.15).toFixed(0),
    temp_feel: (response.main.feels_like - 273.15).toFixed(0),
    temp_min: (response.main.temp_min - 273.15).toFixed(0),
    temp_max: (response.main.temp_max - 273.15).toFixed(0),
    humidity: response.main.humidity,
    weather_title: response.weather[0].main,
    weather_desc: d.charAt(0).toUpperCase() + d.slice(1),
    icon: `https://openweathermap.org/img/wn/${response.weather[0].icon}@4x.png`,
  };
  appendElement('h2', 'weather-container', weather.city);
  appendElement('img', 'weather-container', null, [['src', weather.icon]]);
  appendElement('h3', 'weather-container', weather.weather_title);
  appendElement('div', 'weather-container', `Temperature: ${weather.temp}°C`);
  appendElement('p', 'weather-container', `Today: ${weather.weather_desc} and it feels like ${weather.temp_feel}°C`);
  appendElement('span', 'weather-container', `Min Temp: ${weather.temp_min}°C`);
  appendElement('span', 'weather-container', `Max Temp: ${weather.temp_max}°C`);
  appendElement('span', 'weather-container', `Humidity: ${weather.temp_max}%`);
}

function loadWeather(city) {
  const container = document.getElementById('weather-container');
  container.innerHTML = '<h2 class="loading">Loading...</h2>';
  getWeather(city)
    .then(response => {
      if (response.message) {
        container.innerHTML = `<h2 class="error">${response.message}</h2>`;
      } else {
        container.innerHTML = '';
        displayWeather(response);
      }
    });
}

function submit(e) {
  e.preventDefault();
  loadWeather(e.target.elements.city.value);
}

appendElement('form', 'content', null, [['id', 'city-form']], (node) => {
  node.addEventListener('submit', (e) => { submit(e); });
});
appendElement('input', 'city-form', null, [['type', 'text'], ['name', 'city'], ['placeholder', 'Type city and press Enter to get weather']]);
appendElement('div', 'content', null, [['id', 'weather-container'], ['class', 'weather-container']]);
loadWeather('london');
