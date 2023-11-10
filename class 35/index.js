// Retorne a soma do dobro de todos os pares;
// -> Filtrar os pares;
// -> Dobrar os valores;
// -> Reduzir (somar tudo);

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter((valor) => {
    return valor % 2 === 0;
});
console.log(numerosPares);

const dobrarNumeros = numeros.map((valor) => {
    return valor * 2;
});
console.log(dobrarNumeros);

const somarNumeros = numeros.reduce((acumulador, valor) => {
    return acumulador += valor;
})
console.log(somarNumeros);
