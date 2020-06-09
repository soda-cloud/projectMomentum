// DOMs
const layoutTodoList = document.getElementById('layout-todoList')
const todoListText = layoutTodoList.querySelector('.todoList-text')
const inputTodo = layoutTodoList.querySelector('input')
const todoListModal = layoutTodoList.querySelector('.todoList-modal')
const todoListToogle = layoutTodoList.querySelector('.todoList-toogle')

// status
let todoList = []
const TODOLIST_LS = 'todoList'

const getTodoList = () => {
  todoList = JSON.parse(localStorage.getItem(TODOLIST_LS))
  if (todoList === null) {
    todoList = []
  }
  inputTodo.addEventListener('keypress', inputText)
  todoListToogle.addEventListener('click', showModal)
  todoListText.addEventListener('click', deleteBtn)
  todoListText.addEventListener('change', change)
  render()
}
const change = e => {
  const id = e.target.parentNode.id
  todoList = todoList.map(todo =>
    todo.id === +id ? { ...todo, completed: !todo.completed } : { ...todo }
  )
  render()
}

const saveTodo = () => {
  localStorage.setItem(TODOLIST_LS, JSON.stringify(todoList))
}

const inputText = e => {
  if (e.keyCode !== 13) return
  todoList = [
    { id: getTodoId(), content: e.target.value, completed: false },
    ...todoList
  ]
  e.target.value = ''
  console.log(todoList)
  saveTodo()
  render()
}

const delTodo = id => {
  todoList = todoList.filter(todo => todo.id !== +id)
  render()
}

const getTodoId = () =>
  todoList.length ? Math.max(...todoList.map(todo => todo.id)) + 1 : 1

const showModal = () => {
  todoListModal.classList.toggle('todoList-showing')
}
const deleteBtn = e => {
  if (!e.target.matches('i')) return
  delTodo(e.target.parentNode.id)
}

const render = () => {
  let html = ''
  todoList.forEach(({ id, content, completed }) => {
    html += `  
    <li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox" ${
      completed ? 'checked' : ''
    }>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
    </li>
        `
  })
  todoListText.innerHTML = html
}

export function init () {
  getTodoList()
}
