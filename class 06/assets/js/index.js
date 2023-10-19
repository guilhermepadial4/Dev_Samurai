const scope = () => {
    const weightInput = document.querySelector('#weight__input');
    const heightInput = document.querySelector('#height__input');
    const btnCalc = document.querySelector('#btn__calc');

    const calcImc = () => {
        let result = Number(weightInput / (heightInput * heightInput));
        console.log(result);
    }

    btnCalc.addEventListener('click', (evt) => {
        evt.preventDefault();
        console.log(typeof(Number(weightInput)));
        // calcImc();
    });
}

scope();
