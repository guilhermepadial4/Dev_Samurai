const scope = () => {
    const weightInput = document.querySelector('#weight__input');
    const heightInput = document.querySelector('#height__input');
    const btnCalc = document.querySelector('#btn__calc');

    const calcImc = () => {
        let result = weightInput.value / (heightInput.value * heightInput.value);
        return result.toFixed(1);
    }

    const showResult = () => {
        
    }

    btnCalc.addEventListener('click', (evt) => {
        evt.preventDefault();
        console.log(calcImc());
        showResult();
    });
}

scope();
