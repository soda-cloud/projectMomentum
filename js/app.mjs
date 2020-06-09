import { initBackground } from "./src/background.mjs";
import { initWeather } from "./src/weather.mjs";

window.onload = () => {
  initBackground();
  initWeather();
};
