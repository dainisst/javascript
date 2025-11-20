const toDoList = [];

function addTask() {
    const inputName = document.querySelector('.task-name');
    const inputDate = document.querySelector('.task-date');
    const name = inputName.value;
    const dueDate = inputDate.value;

    toDoList.push({
        // name: name,
        // dueDate: dueDate
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

    for (let i = 0; i < toDoList.length; i++) {
        const todoObject = toDoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button button class="delete-button" onClick="
                toDoList.splice(${i}, 1);
                // localStorage.setItem('list', JSON.stringify(toDoList));
                renderTasks();                    
            ">Delete</button>                    
            `;
        taskHtml += html;
    }

    document.querySelector('.todo-grid').innerHTML = taskHtml;
    console.log(taskHtml);
}

