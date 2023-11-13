const produtoOriginal = {nome: 'Caneca de Ceramica', preco: 13};
const produtoCopia = { ...produtoOriginal };

produtoCopia.nome = 'Caneca de Vidro';
produtoCopia.preco = 23;

console.log(produtoOriginal);
console.log(produtoCopia);
