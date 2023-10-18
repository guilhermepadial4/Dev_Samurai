const btnInput = document.querySelector('#btn__input');
const nameInput = document.querySelector('#name__input');
const lastNameInput = document.querySelector('#lastname__input');
const weightInput = document.querySelector('#weight__input');
const heightInput = document.querySelector('#height__input');

const showArray = () => {
    const user = [];
    
    user.push({
        Name: nameInput.value,
        LastName: lastNameInput.value,
        Weight: weightInput.value,
        Height: heightInput.value,
    });
    console.log(user); 
}

btnInput.addEventListener('click', (evt) => {
    evt.preventDefault();
    showArray();
});
