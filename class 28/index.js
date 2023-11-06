
const createPerson = (name, lastName, height, weight) => {
    return {
        name,
        lastName,
        height,
        weight,
        get imc() {
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2);
        }
    }
};

const p1 = createPerson('Guilherme', 'Padial', 1.80, 72);
console.log(`Olá ${p1.name} ${p1.lastNamename}, seu IMC é: ${p1.imc}`);
