<<<<<<< HEAD
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
=======
import { init as greeting } from './src/greeting.mjs'
import { init as mainTodo } from './src/mainTodo.mjs'
import { init as subTodos } from './src/subTodos.mjs'
import { initWeather } from './src/weather.mjs'
import { initBackground } from './src/background.mjs'

window.onload = () => {
  initWeather()
  initBackground()
  greeting()
  mainTodo()
  subTodos()
}
>>>>>>> 32392062770d9d1f7c7d2eed4d2bb9694ff5acd4
