const submitBtn = document.getElementsByClassName('.submit')[0];
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
})

const validation = () => {
    const email = document.querySelector('#inputEmail');
    const emailInvalid = email < 10 || email > 50;

    const name = document.querySelector('#completeName');
    const invalidName = name < 10 || name > 40;

    const answer = document.querySelector('#answer');
    const invalidAnswer = answer > 500;

    if(emailInvalid || invalidName || invalidAnswer){
        return false;
    } else {
        return true;
    }
}

const verifySubmit = (event) => {
    event.preventDefault();
    const validation = validation();
    if (validation === false) {
        alert('Dados inválidos');
      } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
      }
}