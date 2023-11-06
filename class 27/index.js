// IIFE -> Immediately invoked function expression.

(function (idade, peso, altura) {

    const sobrenome = 'Padial';
    function createName(nome) {
        return `${nome} ${sobrenome}`;
    }

    function falaNome() {
        console.log(createName('Guilherme'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(19, 71, 1.75);
