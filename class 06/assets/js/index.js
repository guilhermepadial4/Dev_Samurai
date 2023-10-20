const scope = () => {
    const weightInput = document.querySelector('#weight__input');
    const heightInput = document.querySelector('#height__input');
    const btnCalc = document.querySelector('#btn__calc');
    const resultParag = document.querySelector('#result__parag');
    const resultParagError = document.querySelector('#result__parag-error');

    const calcImc = () => {
        let result = weightInput.value / (heightInput.value * heightInput.value);
        return result.toFixed(1);
    }

    const showResult = () => {
        if(calcImc() < 18.5){
            resultParag.innerText = `O resultado do seu IMC é: ${calcImc()} (Abaixo do peso)`;
        }else if (calcImc() >= 18.5 && calcImc() <= 24.9) {
            resultParag.innerText = `O resultado do seu IMC é: ${calcImc()} (Peso normal)`;
        }else if (calcImc() >= 25 && calcImc() <= 29.9) {
            resultParag.innerText = `O resultado do seu IMC é: ${calcImc()} (Acima do peso)`;
        }else if (calcImc() >= 30 && calcImc() <= 34.9) {
            resultParag.innerText = `O resultado do seu IMC é: ${calcImc()} (Obesidade grau 1)`;
        }else if (calcImc() >= 35 && calcImc() <= 39.9) {
            resultParag.innerText = `O resultado do seu IMC é: ${calcImc()} (Obesidade grau 2)`;
        }else if (calcImc() > 40) {
            resultParag.innerText = `O resultado do seu IMC é: ${calcImc()} (Obesidade grau 3)`;
        }
    }

    const validationInput = () => {
        if (weightInput.value > '600') {
            resultParag.classList.add('parag__error');
            resultParag.innerText = `Digite um peso válido!`;
        }
    }

    btnCalc.addEventListener('click', (evt) => {
        evt.preventDefault();
        // console.log(calcImc());
        showResult();
        validationInput();
    });
}

scope();
