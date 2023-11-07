
const createPerson = (name, lastName, height, weight) => {
    return {
        name,
        lastName,

        get completeName() {
            return `${this.name} ${this.lastName}`;
        },

        set completeName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.lastName = value.join(' ');
        },

        height,
        weight,

        get imc() {
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2);
        }

    }
};

const p1 = createPerson('Guilherme', 'Padial', 1.74, 72);
const p2 = createPerson('Rafael', 'Padial', 1.61, 64);
const p3 = createPerson('Lucimeire', 'Padial', 1.60, 54);
const p4 = createPerson('Azevedo', 'Martins', 1.75, 76);

console.log(`Olá ${p1.completeName}, seu IMC é: ${p1.imc}`);
console.log(`Olá ${p2.completeName}, seu IMC é: ${p2.imc}`);
console.log(`Olá ${p3.completeName}, seu IMC é: ${p3.imc}`);
console.log(`Olá ${p4.completeName}, seu IMC é: ${p4.imc}`);
