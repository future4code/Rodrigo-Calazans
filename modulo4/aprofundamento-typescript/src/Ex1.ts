// Exercicio 1
// a) Ele aponta um erro de tipo

// b) Podemos atribuir number | string para que ele aceite os dois

// c) 
type Person = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: Person = {
    nome: "Joao",
    idade: 25,
    corFavorita: "Roxo"
}

const pessoa2: Person = {
    nome: "Maria",
    idade: 34,
    corFavorita: "Branco"
}

const pessoa3: Person = {
    nome: "Pedro",
    idade: 21,
    corFavorita: "Azul"
}

const pessoa4: Person = {
    nome: "Mike",
    idade: 52,
    corFavorita: "Vermelho"
}

// d)
enum Cores {
    AZUL = "Azul",
    VERMELHO = "Vermelho",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VIOLETA = "Violeta",
    ANIL = "Anil",
    VERDE = "Verde"
}

const pessoa5: Person = {
    nome: "Anderson",
    idade: 46,
    corFavorita: Cores.ANIL
}

console.log(pessoa1, pessoa2, pessoa3);
