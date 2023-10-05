const name = 'Guilherme';
const lastName = 'Padial';
const age = 19;
const weight = 72.20;
const height = 1.74;

let resultImc = weight / (height * height);

if (resultImc <= 18.5) {
    console.log(`Olá ${name}, o cálculo do seu IMC é ${resultImc.toFixed(1)}. Abaixo do peso.`);
} else if (resultImc <= 25) {
    console.log(`Olá ${name}, o cálculo do seu IMC é ${resultImc.toFixed(1)}. Peso normal.`);
} else if (resultImc <= 29.9) {
    console.log(`Olá ${name}, o cálculo do seu IMC é ${resultImc.toFixed(1)}. Sobre peso.`);
} else if (resultImc <= 34.9) {
    console.log(`Olá ${name}, o cálculo do seu IMC é ${resultImc.toFixed(1)}. Obesidade Grau |.`);
} else if (resultImc <= 39.9) {
    console.log(`Olá ${name}, o cálculo do seu IMC é ${resultImc.toFixed(1)}. Obesidade Grau || (severa).`);
} else if (resultImc >= 40) {
    console.log(`Olá ${name}, o cálculo do seu IMC é ${resultImc.toFixed(1)}. Obesidade Grau ||| (mórbida).`);
}
