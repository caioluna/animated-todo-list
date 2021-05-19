const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')
const todoButton = document.getElementById('todo-button')

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCompleteTodo)

function addTodo(event) {
    event.preventDefault()
    // todo DIV
    if (!todoInput.value || todoInput.value.trim() === "") return todoInput.value = ""
    
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-wrapper')
    // todo CHECK
    const checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class="fas fa-check"></i>'
    checkButton.classList.add('complete-button')
    todoDiv.appendChild(checkButton)
    // todo LI
    const todoItem = document.createElement('li')
    todoItem.classList.add('todo-item')
    todoItem.innerText = todoInput.value
    todoDiv.appendChild(todoItem)
    // todo TRASH
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('delete-button')
    todoDiv.appendChild(deleteButton)
    // INSERT CONTENT TO UL
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}

function deleteCompleteTodo(event) {
    event.preventDefault()
    const item = event.target

    if (item.classList[0] === 'delete-button') {
        item.parentElement.remove()
    } else if (item.classList[0] === 'complete-button' ||
               item.classList[0] === 'todo-item') {
        item.parentElement.classList.toggle('checked')
    }
}
