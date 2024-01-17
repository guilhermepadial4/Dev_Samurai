const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateUppercase = () => String.fromCharCode(rand(65, 91));

console.log(generateUppercase());
