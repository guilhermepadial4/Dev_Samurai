class contoleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Metódo de intância
    aumentaVolume() {
        this.volume += 2;
    }

    // Metódo de intância
    diminuiVolume() {
        this.volume -= 2;
    }

    // Metódo estático
    static trocaPilha() {
        console.log('Ok, irei trocar as pilhas de seu controle.');
    }
}

const c1 = new contoleRemoto('TCL');
c1.aumentaVolume();

console.log(c1);
contoleRemoto.trocaPilha();
