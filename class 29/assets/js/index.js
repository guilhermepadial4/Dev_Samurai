function createCalculator() {
    return {
        display: document.querySelector('#display'),
        btnClear: document.querySelector('#btn__clear'),

        clearDisplay() {
            this.display.value = '';
        },

        start() {
            this.clickButtons();
        },

        clickButtons() {
            document.addEventListener('click', (evt) => {
                const el = evt.target;

                if(el.classList.contains('btn__num')) {
                    this.btnStopDisplay(el.innerText);
                }

                if(el.classList.contains('btn__clear')) {
                    this.clearDisplay();
                }
            });
        },

        btnStopDisplay(value) {
            this.display.value += value;
        }
    };
}

const calculator = createCalculator();
calculator.start();