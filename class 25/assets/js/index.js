const mainScope = () => {
    const inputAddTask = document.querySelector('#input__add_task');
    const btnAddTask = document.querySelector('#btn__add_task');
    const tasks = document.querySelector('#tasks');

    const createLi = () => {
        const li = document.createElement('li');
        return li;
    }

    const clearInput = () => {
        inputAddTask.value = '';
        inputAddTask.focus();
    }

    const createBtnClear = (li) => {
        li.innerText += ' ';
        const btnClear = document.createElement('button');
        btnClear.innerText = 'Apagar';
        btnClear.setAttribute('class', 'clear');
        li.appendChild(btnClear);
    }

    const saveTasks = () => {
        const liTasks = tasks.querySelectorAll('li');
        const listTask = [];

        for (let task of liTasks) {
            let taskText = task.innerText;
            taskText = taskText.replace('Apagar', '').trim(); 
            listTask.push(taskText);
        }

        const taskJson = JSON.stringify(listTask);
        localStorage.setItem('tasks', taskJson);
    }
    
    const createText = (text) => {
        const li = createLi();
        li.innerText += text;        
        tasks.appendChild(li);
        clearInput();
        createBtnClear(li);
        saveTasks();
    } 
    
    const addTaskSave = () => {
        const tasks = localStorage.getItem('tasks');
        const listOfTasks = JSON.parse(tasks);

        for (let task of listOfTasks) {
            createText(task)
        }
    }

    addTaskSave();

    inputAddTask.addEventListener('keypress', (evt) => {
        if (evt.keyCode === 13) {
            if (!inputAddTask.value) return;
            createText(inputAddTask.value);
            
        }
    });

    btnAddTask.addEventListener('click', (evt) => {
        if (!inputAddTask.value) return;
        createText(inputAddTask.value);
        
    });

    document.addEventListener('click', (evt) => {
        const el = evt.target;
        
        if (el.classList.contains('clear')) {
            el.parentElement.remove();
            saveTasks();
        }
    });

}

mainScope();
