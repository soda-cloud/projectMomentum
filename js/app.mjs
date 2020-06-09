import { init as greeting } from './src/greeting.mjs'
import { init as mainTodo } from './src/mainTodo.mjs'
import { init as subTodos } from './src/subTodos.mjs'
//import { initWeather } from './src/weather.mjs'
//import { initBackground } from './src/background.mjs'

window.onload = () => {
  //initWeather()
  //initBackground()
  greeting()
  mainTodo()
  subTodos()
}
