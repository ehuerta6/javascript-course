const todoList = [
  { name: 'dishes', dueDate: '2024-5-0' },
  { name: 'shower', dueDate: '2026-10-9' },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>
      ${dueDate} 
    </div>
    <button class="css-remove-todo-button js-remove-todo-button">
      Delete
    </button> 
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document
    .querySelectorAll('.js-remove-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

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
