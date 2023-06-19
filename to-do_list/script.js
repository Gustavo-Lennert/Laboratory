const input = document.querySelector('.new-task');
const btnAdd = document.querySelector('.add-task');
const tasks = document.querySelector('.tasks');

//Create the li element
function createLi(){
    const li = document.createElement('li');
    li.classList.add('li-task');
    return li;
}

//Create a new task
function newTask(textInput){
   const li = createLi();
   li.innerHTML = textInput; //innerText
   tasks.appendChild(li);
   clearInput();
   createDeleteBtn(li);
   saveTasks();
}

//Clear the value input
function clearInput(){
    input.value = '';
    input.focus(); //evento de foco
}

//Create the delete button and add at li element
function createDeleteBtn(li){
    li.innerHTML += ' ';
    const deleteBtn = document.createElement('i');
    deleteBtn.setAttribute('class', 'delete bi bi-trash trash');
    li.appendChild(deleteBtn);
}

//Save the task list
function saveTasks(){
    const tasksToSave = tasks.querySelectorAll('li');
    const taskList = [];

    for(let task of tasksToSave){
        let textReplace = task.innerText;
        textReplace = textReplace.replace('delete', '').trim(); //trim -> remove empty spaces
        taskList.push(textReplace); //Saving the value of the tasks / push -> including at the end of array
    }
    
    const taskJson = JSON.stringify(taskList); //Convert the task list to a JSON

    localStorage.setItem('tasks', taskJson); //Save tasks into browser storage
}

//Adding the tasks at localStorage to the list of tasks
function addSavedTasks(){
    const savedTasks = localStorage.getItem('tasks'); //Getting all tasks in the localStorage
    const tasksListConverted = JSON.parse(savedTasks); //Converting to array
    
    for(let task of tasksListConverted){ //Adding into the list 
        newTask(task);
    }
}
addSavedTasks();

//Keypress -> Add a new task
input.addEventListener('keypress', (e)=> {
    if(e.key === 'Enter' && input.value){
        newTask(input.value);
    }
});

//Button -> Add a new task
btnAdd.addEventListener('click', () =>{
    if(!input.value) return; //break
    newTask(input.value);
});

//Keypress -> Remove tasks
document.addEventListener('click', (e) =>{
    const element = e.target;
    if(element.classList.contains('delete')){
        element.parentElement.remove(); //remove button parente -> <li></li> 
        saveTasks();
    }
});