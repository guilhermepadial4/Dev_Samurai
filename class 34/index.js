// Dobre os números;
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numeroDobro = numeros.map((valor, indice, array) => {
//     return valor * 2;
// });
// console.log(numeroDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa.
// Remova apenas a chave "nome" do objeto.
// Adicione uma chave id em cada objeto.

const pessoas = [
    {nome: 'Azevedo', idade: 62},
    {nome: 'Lucimeire', idade: 52},
    {nome: 'Bianca', idade: 25},
    {nome: 'Guilherme', idade: 19},
    {nome: 'Rafael', idade: 11},
    {nome: 'Lorena', idade: 5},
]

const nomes = pessoas.map((obj) => {
    return obj.nome;
});
// console.log(nomes);

const idade = pessoas.map((obj) => {
    return { idade: obj.idade };
});
// console.log(idade);

const comIds = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log(pessoas);
console.log(comIds);

