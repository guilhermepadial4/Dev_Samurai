function Calculator() {

    this.display =  document.querySelector('#display');

    this.start = () => {
        this.clickButtons();
        this.keyPress();
    }

    this.keyPress = () => {
        document.addEventListener('keyup', (evt) => {
            if (evt.keyCode === 13) {
                evt.preventDefault();
                this.resultCount();
            }
        })
    }

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.delOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.resultCount = () => {
        let count = this.display.value;

        try {
            count = eval(count);

            if(!count) {
                alert('Conta inválida');
                return;
            }   

            this.display.value = count;

        }catch(err) {
            alert('Conta inválida');
            return;
        }
    }

    this.clickButtons = () => {
        document.addEventListener('click', (evt) => {
            const el = evt.target;

            if(el.classList.contains ('btn__num')) {
                this.btnStopDisplay(el.innerText);
                this.display.focus();
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
    }

    this.btnStopDisplay = (value) => {
        this.display.value += value;
    }
} 

const resultCalculator = new Calculator(); 
resultCalculator.start();