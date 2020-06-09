import { initWeather } from "./src/weather.mjs";

window.onload = async () => {
  await initWeather();
};
