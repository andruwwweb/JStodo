document.addEventListener('DOMContentLoaded', () => {

    let taskDataBase = ['First task', 'second task', 'third task'];
    let newTask = document.querySelector('input');
    let form = document.querySelector('.form');
    let taskList = document.querySelector('.task-list');
    let modal = document.querySelector('.modal-layer');
    let close = document.querySelector('.close');


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let currentValue = newTask.value;

        if (currentValue == '' || currentValue == null) {
            modal.removeAttribute('hidden');
        } else {
            taskDataBase.push(currentValue);
            e.target.reset();
            renderTasks();
        };
    })
    close.addEventListener('click', () => {
        modal.setAttribute('hidden', true);
    })


    function renderTasks() {
        taskList.innerHTML = '';
        taskDataBase.forEach((task, index) => {
            taskList.innerHTML += `<div class="task"> <div class="task-text">${index+1}. ${task}</div> <div class="delete"> <img src="./images/1345874.png" alt=""> </div> </div>`
        });
        document.querySelectorAll('.delete').forEach((item, index) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                taskDataBase.splice(index, 1);
                renderTasks();
            });
        })
    }

    renderTasks()

})