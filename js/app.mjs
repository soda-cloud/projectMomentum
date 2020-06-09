import { initBackground } from "./src/background.mjs";
import { initWeather } from "./src/weather.mjs";
import { renderClock as initClock } from "./src/clock.mjs";
import { getQuote as initQuote }from "./src/quote.mjs";

window.onload = () => {
  initClock();
  initQuote();
  initBackground();
  initWeather();
};
