const mainScope = () => {
    const container = document.querySelector('#section__container');
    const clock = document.querySelector('#clock');
    const btnStart = document.querySelector('#btn_start');
    const btnPause = document.querySelector('#btn_pause');
    const btnReset = document.querySelector('#btn_reset');

    btnStart.addEventListener('click', () => {
        console.log('test');
    });

    btnPause.addEventListener('click', () => {
        console.log('test');
    });

    btnReset.addEventListener('click', () => {
        console.log('test');
    });
}

mainScope();
