const toDoList = [];

function addTask() {
    const inputElement = document.querySelector('.task-input');
    const name = inputElement.value;

    toDoList.push(name);
    inputElement.value = '';
    renderTasks();
    console.log(toDoList);
}


function renderTasks() {
    let taskHtml = '';

    for (let i = 0; i < toDoList.length; i++) {
        const todo = toDoList[i];
        const html =
            `<p>
                ${todo} 
                <button button class="delete-button" onClick="
                   toDoList.splice(${i}, 1);
                   renderTasks();                    
                ">Delete</button>                    
            </p>`;
        taskHtml += html;
    }

    document.querySelector('.task-list').innerHTML = taskHtml;
    console.log(taskHtml);
}