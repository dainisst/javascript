const toDoList = [];

function addTask() {
    const inputName = document.querySelector('.task-name');
    const inputDate = document.querySelector('.task-date');
    const name = inputName.value;
    const dueDate = inputDate.value;

    toDoList.push({
        name,
        dueDate
    });

    inputName.value = '';
    inputDate.value = '';
    renderTasks();
    console.log(toDoList);
}


function renderTasks() {
    let taskHtml = '';

    toDoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button button class="delete-button" onClick="
                toDoList.splice(${index}, 1);                
                renderTasks();                    
            ">Delete</button>                    
            `;
        taskHtml += html;
    });

    document.querySelector('.todo-grid').innerHTML = taskHtml;
    console.log(taskHtml);
}

