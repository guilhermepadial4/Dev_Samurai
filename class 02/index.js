
const fullName = prompt('Type your full name:');

console.log(name);

document.body.innerHTML = `Your full name is: <strong> ${fullName} </strong> <br/>`;

document.body.innerHTML += `Your name has letters: <strong> ${fullName.length} </strong> <br/>`;

document.body.innerHTML += `The second letter of your name is: <strong> ${fullName.charAt(1)} </strong> <br/>`;

document.body.innerHTML += `What is the first index of the letter A in your name? <strong> ${fullName.indexOf('a')} </strong> <br/>`;

document.body.innerHTML += `What is the last index of the letter A in your name? <strong> ${fullName.lastIndexOf('a')} </strong> <br/>`;

document.body.innerHTML += `The last 3 letters of your name are: <strong> ${fullName.slice(-3)} </strong> <br/>`;

document.body.innerHTML += `The words in his name are: <strong> ${fullName.split(' ')} </strong> <br/>`

document.body.innerHTML += `Your name in lower case: <strong> ${fullName.toLowerCase()} </strong> <br/>`;

document.body.innerHTML += `Your name with capital letters: <strong> ${fullName.toUpperCase()} </strong> <br/>`;