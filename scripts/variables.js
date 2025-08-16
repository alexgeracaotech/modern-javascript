
// var aceita redeclaração e reatribuição (sofre içamento)
var nome = "Alex";
var nome = "Arthur";
console.log(nome);

// let não aceita redeclaração, mas aceita reatribuição (não sofre içamento)
let idade = 29;
idade = 27;
console.log(idade);

// const não aceita redeclaração nem reatribuição (não sofre içamento)
const profissao = "desenvolvedor";
console.log(profissao);
