/*
const nome = prompt("Qual o seu nome?")
const cor = prompt("Qual sua cor favorita?")

console.log(`A cor favorita de ${nome} é ${cor}`)
console.log("A cor favorita de "+ nome +"é "+ cor)
*/

/*
const frase = prompt("Escreva uma frase")
const fraseNova = frase.toUpperCase()
const fraseA = fraseNova.replaceAll("A", "I")
const fraseE = fraseA.replaceAll("E", "I")


console.log(fraseE)
console.log(frase.length)
*/

/*
const raças = ["labrador", "pinscher", "akita", "husky", "spitz"]
const numero = prompt("Insira um numero de 1 a 5")
const raçaSelecionada = raças[numero - 1] 

console.log("Raça selecionada:", raçaSelecionada) */

// const numeros = ["1,", "2", "3", "4", "5", "6"]

// console.log(numeros.length)

// numeros.push("7")

// numeros.splice(3,2)

// console.log(numeros.length)


// Escopo
const a = 1

function imprimirVariavel() {
    let b = 2
    console.log("a,", a)
    console.log("b,", b)
    return b
}

console.log(imprimirVariavel())
const bFora = imprimirVariavel()

console.log("B fora é", bFora)


 














