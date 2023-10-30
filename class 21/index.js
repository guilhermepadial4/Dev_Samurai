const soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError ('x e y precisam ser números.');
    }

    return y + x;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (err) {
    // console.log(err);
    console.log('Alguma coisa mais amigavel para o usuário.');
}
