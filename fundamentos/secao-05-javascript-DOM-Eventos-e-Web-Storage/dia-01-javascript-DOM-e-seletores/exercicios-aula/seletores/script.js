const headerContainer = document.querySelectorAll('h1')[0];
headerContainer.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const headerEmergencyTasks = document.querySelectorAll('.emergency-tasks h3');

for(let index = 0; index < headerEmergencyTasks.length; index += 1){
    headerEmergencyTasks[index].style.backgroundColor = 'purple';
};

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'yellow';

const headerNoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');

for(let index = 0; index < headerNoEmergencyTasks.length; index += 1){
    headerNoEmergencyTasks[index].style.backgroundColor = 'black';
}

const footer = document.getElementById('footer-container').style.backgroundColor = 'rgb(0, 53, 51)';