import el from './library';

let tempSymbol;
let weather;

const toF = (temp) => ((temp * (9 / 5)) + 32).toFixed(0);

const useSymbol = (symbol) => {
  if (tempSymbol !== symbol) {
    tempSymbol = symbol;
    if (symbol === 'F') {
      weather.d_temp = toF(weather.temp);
      weather.d_temp_feel = toF(weather.temp_feel);
      weather.d_temp_min = toF(weather.temp_min);
      weather.d_temp_max = toF(weather.temp_max);
    } else {
      weather.d_temp = weather.temp.toFixed(0);
      weather.d_temp_feel = weather.temp_feel.toFixed(0);
      weather.d_temp_min = weather.temp_min.toFixed(0);
      weather.d_temp_max = weather.temp_max.toFixed(0);
    }
  }
};

const displayWeather = (symbol) => {
  useSymbol(symbol || 'C');
  document.getElementById('weather-container').innerHTML = '';
  el('h2', 'weather-container', weather.city);
  el('img', 'weather-container', null, [['src', weather.icon]]);
  el('h3', 'weather-container', weather.weather_title);
  el('div', 'weather-container', `Temperature: ${weather.d_temp}°${tempSymbol}`);
  el('p', 'weather-container', `Today: ${weather.weather_desc} and it feels like ${weather.d_temp_feel}°${tempSymbol}`);
  el('span', 'weather-container', `Min Temp: ${weather.d_temp_min}°${tempSymbol}`);
  el('span', 'weather-container', `Max Temp: ${weather.d_temp_max}°${tempSymbol}`);
  el('span', 'weather-container', `Humidity: ${weather.humidity}%`);
};

const loadWeather = (response) => {
  const d = response.weather[0].description;
  weather = {
    city: response.name,
    temp: response.main.temp - 273.15,
    temp_feel: response.main.feels_like - 273.15,
    temp_min: response.main.temp_min - 273.15,
    temp_max: response.main.temp_max - 273.15,
    d_temp: (response.main.temp - 273.15).toFixed(0),
    d_temp_feel: (response.main.feels_like - 273.15).toFixed(0),
    d_temp_min: (response.main.temp_min - 273.15).toFixed(0),
    d_temp_max: (response.main.temp_max - 273.15).toFixed(0),
    humidity: response.main.humidity,
    weather_title: response.weather[0].main,
    weather_desc: d.charAt(0).toUpperCase() + d.slice(1),
    icon: `https://openweathermap.org/img/wn/${response.weather[0].icon}@4x.png?appid=04d4d495e39f2311c4acd1148b6e2130`,
  };
  displayWeather();
};

const getWeather = (city) => {
  const container = document.getElementById('weather-container');
  container.innerHTML = '<h2 class="loading">Loading...</h2>';
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04d4d495e39f2311c4acd1148b6e2130`)
    .then(response => response.json())
    .then(response => {
      if (response.message) {
        container.innerHTML = `<h2 class="error">${response.message}</h2>`;
      } else {
        loadWeather(response);
      }
    });
};

const submit = (e) => {
  e.preventDefault();
  getWeather(e.target.elements.city.value);
};


el('h1', 'content', 'Weather');
el('form', 'content', null, [['id', 'city-form']], (node) => {
  node.addEventListener('submit', (e) => { submit(e); });
});
el('input', 'city-form', null, [['type', 'text'], ['name', 'city'], ['placeholder', 'Type city and press Enter to get weather']]);
el('div', 'content', null, [['id', 'weather-container'], ['class', 'weather-container']]);
getWeather('london');
el('button', 'content', 'Use °C', null, (node) => {
  node.addEventListener('click', () => { displayWeather('C'); });
});
el('button', 'content', 'Use °F', null, (node) => {
  node.addEventListener('click', () => { displayWeather('F'); });
});
