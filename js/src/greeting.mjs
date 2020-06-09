// DOMs
const layoutGreetings = document.getElementById('layout-greetings')
const greetingClock = layoutGreetings.querySelector('.greeting-clock')

const greetingsUserNot = layoutGreetings.querySelector('.greetings-userNot')
const userInputText = greetingsUserNot.querySelector('input')

const greetingsUserIs = layoutGreetings.querySelector('.greetings-userIs')
const userNameText = greetingsUserIs.querySelector('span')
const modifyBtn = greetingsUserIs.querySelector('i')

// State
let user = { name: '' }
let textSize = 1
const USER_LS = 'user'

// function
const clock = () => {
  const todayDate = new Date()
  const hour = todayDate.getHours()
  let greeting = ''
  if (hour >= 6 && hour <= 12) {
    greeting = 'morning'
  } else if (hour >= 13 && hour <= 18) {
    greeting = 'afternoon'
  } else {
    greeting = 'night'
  }

  greetingClock.textContent = greeting
}

const inputPage = () => {
  userInputText.value = ''
  greetingsUserNot.classList.remove('greeting-showing')
  greetingsUserIs.classList.add('greeting-showing')
  userInputText.addEventListener('keypress', userInput)
  userInputText.addEventListener('keydown', inputSize)
}
const greetingPage = ({ name }) => {
  greetingsUserNot.classList.add('greeting-showing')
  greetingsUserIs.classList.remove('greeting-showing')
  userNameText.textContent = name
  modifyBtn.addEventListener('click', modify)
}
const userNameIs = () => {
  let userName = localStorage.getItem(USER_LS)
  userName = JSON.parse(userName)
  if (userName === null || userName.name === '') {
    // user Not
    inputPage()
  } else {
    // user Is
    greetingPage(userName)
  }
}

// Event
const inputSize = e => {
  // e.target.value.length 글자 수

  userInputText.setAttribute('size', +length + 1)
}
const userInput = e => {
  if (e.keyCode !== 13) return
  saveUserName(e.target.value.trim())
  render()
}
const saveUserName = name => {
  user = { name }
  localStorage.setItem(USER_LS, JSON.stringify(user))
  render()
}
const modify = () => {
  saveUserName('')
  greetingsUserNot.classList.remove('greeting-showing')
  greetingsUserIs.classList.remove('greeting-showing')
  render()
}

const render = () => {
  clock()
  userNameIs()
}
export function init () {
  render()
}
