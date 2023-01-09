const daysElement = document.getElementsByClassName('days-container');

const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfTheMonth = () => {
    let decemberDays = document.querySelector('#days');

    for(let index = 0; index < decemberDaysList.length; index +=1){
        const daysOftheMonth = decemberDaysList[index];
        const daysInLi = document.createElement('li');
        daysInLi.innerHTML = daysOftheMonth;
        decemberDays.appendChild(daysInLi);

        if(daysOftheMonth === 24 || daysOftheMonth === 31){
            daysInLi.className = 'day holiday';
        } else if(daysOftheMonth === 4 || daysOftheMonth === 11 || daysOftheMonth === 18){
            daysInLi.className = 'day friday';
        } else if (daysOftheMonth === 25){
            daysInLi.className = 'day holiday friday';
        } else {
            daysInLi.className = 'day';
        }
    };
}
    createDaysOfTheMonth();

const createbtnHoliday = (btnName) => {
    let btnStorage = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let btnID = 'btn-holiday';

    newButton.innerHTML = btnName;
    newButton.id = btnID;

    btnStorage.appendChild(newButton);
}
    createbtnHoliday('Feriados');

const displayHolidays = () => {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'green';
  
    getHolidayButton.addEventListener('click', () => {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }
displayHolidays();

const createFridayButton = (buttonName) => {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button'); 
    let newButtonID = 'btn-friday';    

        newButton.innerHTML = buttonName; 
        newButton.id = newButtonID; 
        buttonContainer.appendChild(newButton);
}
createFridayButton('Sexta-feira');

const displayFridays = (fridaysArray) => {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU';
  
    getFridayButton.addEventListener('click', () => {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    });
}

let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);
  
const dayMouseOver = () => {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', (event) => {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600'; 
    });
  }
  
  const dayMouseOut = () => {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', (event) => {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    });
  }

dayMouseOver();
dayMouseOut();

const newTaskDiv = (color) => {
    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask); 
}
newTaskDiv('green');

const setTaskClass = () => {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    myTasks.addEventListener('click', (event) => {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
}
setTaskClass();

const setDayColor = () => {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', (event) => {
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; 
        event.target.style.color = color; 
      } else if (eventTargetColor === taskColor) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  }

setDayColor();

const addNewTask = () => {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', () => {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    });
  
    getInputField.addEventListener('keyup', (event) => {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  }
  
  addNewTask();
  