const mainScope = () => {
const form = document.querySelector('#weight__input');
const btn = document.querySelector('#btn__calc');

btn.addEventListener('click', (evt) => {
    evt.preventDefault;
    console.log(form.value);
})

};

mainScope();
