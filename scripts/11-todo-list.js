const todoList = [
  { name: 'pene', dueDate: '2024-5-0' },
  { name: 'caca', dueDate: '2026-10-9' },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>
      ${dueDate} 
    </div>
    <button class="css-remove-todo-button" onclick="
      todoList.splice(${i},1);
      renderTodoList()
    ">
      Delete
    </button> 
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');
  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });

  inputElement.value = '';
  dateInputElement.value = '';
  renderTodoList();
}
