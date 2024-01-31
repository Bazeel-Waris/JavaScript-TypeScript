
// Varibales for Add Task Container

const addTaskBtn = document.getElementById('add-taskBtn');
const inputTask = document.getElementById('input-task');
const taskContainer = document.getElementById('task-container');

// Event Listener for Add Button

addTaskBtn.addEventListener('click', () => {

    // Create Div & Added a Class to it Name 'Task'
    let task = document.createElement('div');
    task.classList.add('task');

    // create <li> Element with Text in it & Append it to Above <div> with class `task`
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></li>`;
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if(inputTask.value === "") {
        alert('Nothing to Add!');
    }
    else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    checkBtn.addEventListener('click', () => {
        checkBtn.parentElement.style.textDecoration = 'line-through';
    });
    
    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentElement.remove();
    });
});

