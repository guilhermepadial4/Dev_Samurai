const mainScope = () => {
const form = document.querySelector('#input');
const btn = document.querySelector('#btn__calc');
const parag = document.querySelector('#result__parag');

function ValidatorCpf(cpfSubmit) {
    Object.defineProperty(this, 'cpfClean', {
        enumerable: true,
        get: function() {
            return cpfSubmit.replace(/\D+/g, '');
        }
    });
    };
    
    ValidatorCpf.prototype.valid = function() {
        if(typeof this.cpfClean === 'undefined') return false;
        if(this.cpfClean.length !== 11) return false;
        if(this.isSequence()) return false;
        
    
        const cpfPartial = this.cpfClean.slice(0, -2);
        const digit1 = this.createDigit(cpfPartial);
        const digit2 = this.createDigit(cpfPartial + digit1);
    
        const newCpf = cpfPartial + digit1 + digit2;
        return newCpf === this.cpfClean;
        
    };
    
    ValidatorCpf.prototype.createDigit = function(cpfPartial) {
        const cpfArray = Array.from(cpfPartial);
        let regressive = cpfArray.length + 1;
        let total = cpfArray.reduce((ac, val) => {
            ac += (regressive * Number(val));
            regressive--;
            return ac;
        }, 0);
    
        const digit = 11 - (total % 11);
        return digit > 9 ? '0' : String(digit);
    };
    
    ValidatorCpf.prototype.isSequence = function() {
        const sequence = this.cpfClean[0].repeat(this.cpfClean.length);
        return sequence === this.cpfClean;
    };

btn.addEventListener('click', (evt) => {
    const cpf = new ValidatorCpf(input.value);
    if(cpf.valid() === true) {
        parag.classList.remove('parag__error');
        parag.classList.add('parag__valid');
        parag.innerText = 'CPF Válido';
    }else if (cpf.valid() === false) {
        parag.classList.add('parag__error');
        parag.innerText = 'CPF Inválido';
    }
    
});

};

mainScope();
