const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateUppercase = () => String.fromCharCode(rand(65, 91));

const generateLowercase= () => String.fromCharCode(rand(97, 123));

const generateNumber= () => String.fromCharCode(rand(48, 58));

const symbol = '.,;:^<>{}?/*-+|!@#$%¨&()-==§°';
const generateSymbol = () => symbol[rand(0, symbol.length)]

const generatePassword = (amount, uppercases, lowercases, numbers, symbols) => {
    const passawordArray = [];
    amount = Number(amount);

    for (let i = 0; i < amount; i++) {
        uppercases && passawordArray.push(generateUppercase());
        lowercases && passawordArray.push(generateLowercase());
        numbers && passawordArray.push(generateNumber());
        symbols && passawordArray.push(generateSymbol());
    }

    return passawordArray.join('').slice(0, amount);
}

export {generatePassword};