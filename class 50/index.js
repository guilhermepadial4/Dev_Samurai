class validatorCpf {
    constructor(cpfSubmit) {
        Object.defineProperty(this, 'cpfClean', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfSubmit.replace(/\D+/g, '')
        });
    }

    isSequence() {
        return this.cpfClean.charAt(0).repeat(11) === this.cpfClean;
    }

    generateNewCpf() {
        const cpfWithoutDigits = this.cpfClean.slice(0, -2);
        const digit1 = this.generateDigit(cpfWithoutDigits);
        const digit2 = this.generateDigit(cpfWithoutDigits + digit1);
        this.newCpf = cpfWithoutDigits + digit1 + digit2;
    }

    generateDigit(cpfWithoutDigits) {
        let total = 0;
        let reverso = cpfWithoutDigits.length + 1;

        for (let stringNumber of cpfWithoutDigits) {
            total += reverso * Number(stringNumber);
            reverso--
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    valid() {
        if (!this.cpfClean) return false;
        if (typeof this.cpfClean !== 'string') return false;
        if (this.cpfClean.length !== 11) return false
        if (this.isSequence()) return false;
        this.generateNewCpf();

        return this.newCpf === this.cpfClean;
    }
}

const cpf1 = new validatorCpf('761.037.070-30');
if (cpf1.valid()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}
