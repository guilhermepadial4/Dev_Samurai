const mainScope = () => {
    const container = document.querySelector('#section__container');
    const clock = document.querySelector('#clock');
    const btnStart = document.querySelector('#btn_start');
    const btnPause = document.querySelector('#btn_pause');
    const btnReset = document.querySelector('#btn_reset');
    let seconds = 0;
    let timer;

    const getTimeFromSeconds = (seconds) => {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12:false,
            timeZone:'GMT'
        });
    }

    const startClock = () => {
        timer = setInterval(() => {
            seconds++
            clock.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    btnStart.addEventListener('click', () => {
        clearInterval(timer);
        startClock();
        clock.classList.remove('pause_clock');
    });

    btnPause.addEventListener('click', () => {
        clearInterval(timer);
        clock.classList.add('pause_clock');
    });

    btnReset.addEventListener('click', () => {
        clearInterval(timer);
        clock.innerHTML = '00:00:00';
        seconds = 0;
        clock.classList.remove('pause_clock');
    });
}

mainScope();
