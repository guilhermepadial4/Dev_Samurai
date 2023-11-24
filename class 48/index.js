class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.modelo} já ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.modelo} já desligado`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends Dispositivo {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
};

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S23');

s1.ligar();
console.log(s1);
