/* INTERPRETAÇAO DE CODIGO 

1. Matheus Nachtergaele
   Virginia Cavendish
   canal: "Globo", horario: "14h" 
   
2. a)
Cachorro  
    nome: "Juca", idade: 3, raca: "SRD"

gato
    nome: "Juba", idade: 3, raca: "SRD"

tartaruga
    nome: "Jubo", idade: 3, raca: "SRD"

b) Separa a chave do valor.

3. a)
false
undifined

b)
porque a funçao retorna a propriedade como um array do objeto
*/

// ESCRITA DE CODIGO

// 1. a)
/*
const pessoa = {
    nome: "Rodrigo",
    apelido: ["Testa", "Guigo", "Digao"]
}
function imprimir(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}`)

}
imprimir(pessoa)

// b)
const novaPessoa = {
    ...pessoa,
    apelido: ["Digo", "Testinha", "Guigao"]
    
}
imprimir(novaPessoa)
*/

// 2 a)
/*
const objeto1 = {
    nome: "Joao",
    idade: 23,
    profissao: "Marceneiro"
}
const objeto2 = {
    nome: "Pedro",
    idade: 21,
    profissao: "jogador"
}

// b)
function objetos(name) {
    const array = [name.nome, name.nome.length, name.idade, name.profissao, name.profissao.length]
    return array
}

console.log(objetos(objeto2))
*/

//3. a)
/*
const carrinho = []

// b)
const fruta1 = {
    nome: "Banana",
    Disponibilidade: true
}

const fruta2 = {
    nome: "Uva",
    Disponibilidade: true
}

const fruta3 = {
    nome: "Morango",
    Disponibilidade: true
}

// c)
function cestoFruta(fruta) {
    return carrinho.push(fruta)
}
cestoFruta(fruta1)
cestoFruta(fruta2)
cestoFruta(fruta3)

// d)
console.log(carrinho)
*/

// DESAFIOS
// 1.
/*
lista = () => {
    const dados = {
        nome: prompt("Qual o seu nome?"),
        idade: prompt("Qual a sua idade"),
        profissao: prompt("Qual a sua profissao?") 
    }
    console.log(dados)
}
lista()
*/

// 2.
/*
const filme1 = {
    nome: "Thor",
    ano: 2011
}

const filme2 = {
    nome: "Doutor Estranho",
    ano: 2016
}

cinema = (filme1, filme2) => {
    resposta1 = filme1.ano < filme2.ano
    resposta2 = filme1.ano === filme2.ano
    console.log("O primeiro filme foi lançado antes do segundo?", resposta1)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", resposta2)
}
cinema(filme1,filme2)
*/

// 3.
// estoque = (AA) => {
//     novoEstoque = !AA.Disponibilidade
//     return novoEstoque
// }
// console.log(estoque(fruta3))

