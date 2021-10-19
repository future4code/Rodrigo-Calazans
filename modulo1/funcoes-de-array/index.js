//      -----------------------Exercícios de interpretação de código------------------------

/*
1. o objeto:                          junto com o indice              e o array completo 
{ nome: "Amanda Rangel", apelido: "Mandi" }, 0
{ nome: "Laís Petra", apelido: "Laura" }, 1
{ nome: "Letícia Chijo", apelido: "Chijo" }, 2


2. Sera impresso um Array com os nomes;
    [Amanda Rangel, Lais Petra, Leticia Chijo]


3. Vai retornar um novo array:
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" }
    */

//          -----------------Exercícios de escrita de código-----------------------

/* 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as 
    operações pedidas nos itens abaixo utilizando as funções de array map e filter:
*/
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

// a) Crie um novo array que contenha apenas o nome dos doguinhos
// const nomePet = (pet) => {
//     return pet.nome
// }
// const nomeDosPets = pets.map(nomePet)
// console.log(nomeDosPets);

// b) a) Crie um novo array que contenha apenas o nome dos doguinhos
// const salsichas = (pet) => {
//     return pet.raca === "Salsicha"
// }

// const racaSalsicha = pets.filter(salsichas)
// console.log(racaSalsicha);

/* c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que 
    são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% 
    para tosar o/a [NOME]!" */
// const poodle = (pet) => {
//     if (pet.raca === "Poodle") {
//         console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`);
//     }
// }
// const descontoPoodle = pets.filter(poodle)
// console.log(descontoPoodle);

/* 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
      utilizando as funções de array map e filter: */
// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// a) Crie um novo array que contenha apenas o nome de cada item
// const nomes = (produto) => {
//     return produto.nome
// }
// const nomeArray = produtos.map(nomes)
// console.log(nomeArray)

/* b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
      aplicando 5% de desconto em todos eles */

// const produtosPreco = (objeto) => {
//     novoPreco = objeto.preco * 0.95
//     return {nome: objeto.nome, categoria: novoPreco}
// }
// const arrayPreco = produtos.map(produtosPreco)
// console.log(arrayPreco);

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
// const bebidas = (objeto) => {
//     if (objeto.categoria === "Bebidas") {
//         return objeto.categoria
//     }
// }
// const arrayBebidas = produtos.filter(bebidas)
// console.log(arrayBebidas);

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
// const ype = (objeto) => {
//     if (objeto.nome.includes("Ypê") === true) {
//         return objeto.nome
//     }
// }
// const arrayYpe = produtos.filter(ype)
// console.log(arrayYpe);

/* e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse 
      array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê" */
// const arrayFrase = (objeto) => {
//     return `Compre ${objeto.nome} por ${objeto.preco}`
// }
// const newArray = arrayYpe.map(arrayFrase)
// console.log(newArray);

//        ---------------------------DESAFIOS--------------------------------

// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
const nomeAlfabetico = (objeto) => {
    ordem = objeto.nome
    return ordem
}
const nomeOrdem = pokemons.map(nomeAlfabetico).sort()
console.log(nomeOrdem);

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
// const tipoPokemon = (objeto) => {
//     arrayTipo = [objeto.tipo]
//     return arrayTipo
// }
// const newArray = pokemons.map(tipoPokemon)
// console.log(newArray);


// Nao soube fazer a letra B