const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 9000];
const [primaryNumber, secondNumber, thridNumber, ...rest] = numbers;

console.log(primaryNumber, secondNumber, thridNumber);
console.log(rest);
