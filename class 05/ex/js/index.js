const nameInput = document.querySelector('#name__input');
const btnInput = document.querySelector('#btn__input');
const lastNameInput = document.querySelector('#lastname__input');
const weightInput = document.querySelector('#weight__input');
const heightInput = document.querySelector('#height__input');

btnInput.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log(nameInput.value, lastNameInput.value, weightInput.value, heightInput.value);
});