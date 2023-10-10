const headerContainer = document.querySelector('.header__container');
const mainContainer = document.querySelector('.main__container');

let generatedNumber = prompt('Type a number:');
let formattedNumber = Number(generatedNumber);

let squareRoot = Math.sqrt(formattedNumber);

let wholeNumber = Number.isInteger(formattedNumber);

let nanNumber = isNaN(formattedNumber);

let roundingDown = Math.floor(formattedNumber);

let roundingUp = Math.round(formattedNumber);

let formattedDecimalValue =  formattedNumber.toFixed(2);

document.body.innerHTML = `<h1>Your Number is: ${formattedNumber}.</h1>`;
document.body.innerHTML += `Square Root is: ${squareRoot}. <br/>`;
document.body.innerHTML += `${formattedNumber} Is it Integer: ${wholeNumber}. <br/>`;
document.body.innerHTML += `Is NAN: ${nanNumber}. <br/>`;
document.body.innerHTML += `Rounding Down: ${roundingDown}. <br/>`;
document.body.innerHTML += `Rounding Up: ${roundingUp}. <br/>`;
document.body.innerHTML += `With Two Decimal Places: ${roundingUp}. <br/>`;

