//Retorne os números maiores que 10;
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter(valor => valor >= 10);
// console.log(numerosFiltrados);
// for(let valor of numeros) {
//     if (valor >= 10) {
//         console.log(valor);
//     }
// }

// Retorne as pessoas que tem mais de 6 letras ou mais;
// Retorne as pessoas com mais de 50 anos;
// Retorne as pessoas cujo nome termina com a letra "A";

const pessoas = [
    {nome:'Azevedo', idade:62},
    {nome:'Lucimeire', idade:52},
    {nome:'Bianca', idade:25},
    {nome:'Guilherme', idade:19},
    {nome:'Rafael', idade:11},
    {nome:'Lorena', idade:5},
];

const filterNome = pessoas.filter((obj) => {
    return obj.nome.length > 6;
});
console.log(filterNome);

console.log('/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*');

const filterIdade = pessoas.filter((obj) => {
    return obj.idade > 50;
})
console.log(filterIdade);

console.log('/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*');

const filterNomeA = pessoas.filter((obj) => {
    return obj.nome.toLowerCase().endsWith('a');
})

console.log(filterNomeA);
