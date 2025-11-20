// Load tasks from localStorage when the page loads
const storedTasks = localStorage.getItem('todoList');
const toDoList = storedTasks ? JSON.parse(storedTasks) : [];

// Function to save tasks to localStorage
function saveToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(toDoList));
}

function addTask() {
  const inputName = document.querySelector('.task-name');
  const inputDate = document.querySelector('.task-date');
  const name = inputName.value.trim();
  const dueDate = inputDate.value;

  // Validate input
  if (name === '') {
    alert('Please enter a task name!');
    return;
  }

  // Add task to the array
  toDoList.push({
    name,
    dueDate
  });

  // Save to localStorage
  saveToLocalStorage();

  // Clear inputs and update display
  inputName.value = '';
  inputDate.value = '';
  renderTasks();
}

function renderTasks() {
  let taskHtml = '';

  for (let i = 0; i < toDoList.length; i++) {
    const todoObject = toDoList[i];
    const { name, dueDate } = todoObject;

    const html = `
            <div class="todo-item">
                <div>${name}</div>
                <div>${dueDate}</div>
                <button class="delete-button" onclick="deleteTask(${i})">Delete</button>                    
            </div>
        `;
    taskHtml += html;
  }

  document.querySelector('.todo-grid').innerHTML = taskHtml;
}

function deleteTask(index) {
  // Remove task from array
  toDoList.splice(index, 1);

  // Save updated array to localStorage
  saveToLocalStorage();

  // Update display
  renderTasks();
}

// Load and display tasks when the page loads
window.onload = function () {
  renderTasks();
};