import ValidaCPF from "./ValidaCPF.js";

export default class GenerateCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    generates() {
        const cpfWithoutDigit = this.rand();
        const digit1 = '';
    }
}

