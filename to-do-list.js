const toDoList = [];

function addTask() {
    const inputElement = document.querySelector('#taskInput');
    const name = inputElement.value;

    toDoList.push(name); 
    inputElement.value = '';
    renderTasks();       
    console.log(toDoList);
}

function renderTasks() {
    let taskHtml = '';

    for (let i = 0; i < toDoList.length; i++) {
        const task = toDoList[i];
        taskHtml += `<li>${task}</li>`;
    }

    document.querySelector('.task-list').innerHTML = taskHtml;
}