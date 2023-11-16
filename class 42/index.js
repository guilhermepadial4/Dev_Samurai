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

const cpf = new ValidatorCpf('111.111.111.11');
console.log(cpf.valid());


// examples;
// 586.913.318-10;
// 710.413.378-09;
