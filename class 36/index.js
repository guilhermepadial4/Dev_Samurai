function Produto(nome, preco, estoque) {

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: false, // pode alterar
            configurable: true // configurável
        },
        
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: false, // pode alterar
            configurable: true // configurável
        }
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: true // configurável
    });   
     
}


const p1 = new Produto('Galaxy S23 Ultra', 'R$ 3.000,00', 103);

console.log(p1);

for(let chave in p1) {
    console.log(chave);
}
