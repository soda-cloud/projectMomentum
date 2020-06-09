// state
let state = JSON.parse(localStorage.getItem('weatherState'));

// utils
const API_KEY = '2a12527f777b1cbb783fcf5604ac51ae';
const needForecast = true ? '' : 'daily';
const unitSetting = true ? 'metric' : 'imperial';
const icons = {
  'clear sky': 'B',
  'few clouds': 'H',
  'overcast clouds': 'Y',
  'scattered clouds': 'H',
  'broken clouds': 'H',
  'shower rain': 'T',
  'heavy intensity rain': 'R',
  rain: 'Q',
  thunderstorm: '0',
  snow: 'U',
  mist: 'M',
  'moderate rain': 'R',
  'light rain': 'R',
  // "C":'*',
  // "F":'+',
};
// DOMs
const $layoutWeather = document.getElementById('layout-weather');

// templates
const Template = (function () {
  function Template() {}
  Template.prototype.init = () => {
    $layoutWeather.innerHTML = `
    <section class="current">
    </section>
    <section class="selected-forecast">
      <section class="selected">
      </section>
      <section class="forecast">
        <ul class="forecast-list">
        </ul>
      </section>
    </section>
    `;
  };
  Template.prototype.current = () => {
    document.querySelector('.current').innerHTML = `
            <div class="summary">
              <span class="icon">${icons[state.current.description]}</span>
              <span class="temp">${Math.round(state.current.temp)}°</span>
            </div>
            <div class="location">${state.timezone}</div>
          `;
  };
  Template.prototype.selected = () => {
    document.querySelector('.selected').innerHTML = `
            <div class="selected-location">${state.timezone}</div>
            <div class="selected-status">${
              state.days[0].weather[0].description[0].toUpperCase() +
              state.days[0].weather[0].description.slice(1)
            }</div>
            <div class="selected-summary">
              <span class="selected-icon">${
                icons[state.days[0].weather[0].description]
              }</span>
              <span class="selected-temp-high">${Math.round(
                state.days[0].temp.max
              )}°</span>
              <span class="selected-temp-low">${Math.round(
                state.days[0].temp.min
              )}°</span>
            </div>
          
          `;
  };
  Template.prototype.forecast = () => {
    let listItems = '';

    state.days.forEach((day) => {
      listItems += `
                    <li class="forecast-item">
                      <div class="item-name">${new Date(day.dt * 1000)
                        .toString()
                        .slice(0, 3)
                        .toUpperCase()}</div>
                      <span class="item-icon">${
                        icons[day.weather[0].description]
                      }</span>
                      <span class="item-temp-high">${Math.round(
                        day.temp.max
                      )}°</span>
                      <span class="item-temp-low">${Math.round(
                        day.temp.min
                      )}°</span>
                    </li>
                  `;
    });
    document.querySelector('.forecast-list').innerHTML = listItems;
  };
  return Template;
})();

const template = new Template();

// functions
const render = () => {
  state = JSON.parse(localStorage.getItem('weatherState'));
  template.init();
  template.current();
  template.selected();
  template.forecast();
};

const setState = (current, daily, timezone) => {
  localStorage.setItem(
    'weatherState',
    JSON.stringify({
      current: {
        dt: current.dt,
        temp: current.temp,
        description: current.weather[0].description,
        mainly: current.weather[0].main,
      },
      days: daily.slice(0, 5),
      timezone,
    })
  );
};

const getData = async () => {
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${37.5326}&lon=${127.024612}&exclude=hourly${needForecast}&appid=${API_KEY}&units=${unitSetting}`;

  const response = await fetch(URL).catch(console.log);
  const data = await response.json();
  const { current, daily, timezone } = data;

  setState(current, daily, timezone);
};

const initWeather = async () => {
  if (!state) await getData();
  render();
};

$layoutWeather.onclick = ({ target }) => {
  if (!target.matches('.location')) return;
  const $modal = document.querySelector('.selected-forecast');
  $modal.classList.toggle('weather-active');
};

$layoutWeather.onclick = ({ target }) => {
  if (!target.matches('.forecast-item')) return;
  console.log(target);
};

export { initWeather };
