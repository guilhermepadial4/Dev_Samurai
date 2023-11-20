const pessoas = [
    {id: 3, nome: 'Guilherme'},
    {id: 2, nome: 'Rafael'},
    {id: 1, nome: 'Lorena'},
];

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// };

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
};

console.log(novasPessoas.get(3));
