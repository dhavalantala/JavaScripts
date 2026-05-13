let savedTodo = localStorage.getItem('todoList');
let todoList = savedTodo !== null ? JSON.parse(savedTodo) : [
  {
    item: 'Licence Date',
    dueDate: '2026-05-08'
  },
  {
    item: 'Pinal Livence Date',
    dueDate: '2026-05-20'
  }
];

// Always display items immediately on page load
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    if (!todoItem || !todoDate) {
        alert (`Please enter both a task and a due date.`);
        return ;
    }

    todoList.push({item: todoItem, dueDate: todoDate});
    // Save update array to locacStorage
    saveToStorage();

    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}

function deleteTodo(index) {
  todoList.splice(index, 1); 
  saveToStorage();           
  displayItems();            
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let {item, dueDate} = todoList[i];
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}