import { generatePassword } from "./generators.js";

const generatedPassword = document.querySelector('.generated__password');
const amount = document.querySelector('.amount');
const uppercase = document.querySelector('.uppercase');
const lowercase = document.querySelector('.lowercase');
const number = document.querySelector('.numbers');
const symbol = document.querySelector('.symbols');
const btnGenerate = document.querySelector('.generate__password');

const test = () => {
    btnGenerate.addEventListener('click', () => {
        generatedPassword.innerHTML = generated();
    })
}

const generated = () => {
    const password = generatePassword(
        amount.value,
        uppercase.checked,
        lowercase.checked,
        number.checked,
        symbol.checked,
    )

    return password || 'Nada selecionado.';
}

export{test};