function createCalculator() {
    return {
        display: document.querySelector('#display'),

        start() {
            this.clickButtons();
        },

        clearDisplay() {
            this.display.value = '';
        },

        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        resultCount(){
            let count = this.display.value;

            try {
                count = eval(count);

                if(!count) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = count;
            } catch(err) {
                alert('Conta inválida');
                return;
            }   
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

                if(el.classList.contains('btn__del')) {
                    this.delOne();
                }

                if(el.classList.contains('btn__eq')) {
                    this.resultCount();
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
