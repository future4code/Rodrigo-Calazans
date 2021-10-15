//  Exercícios de interpretação de código

/* 1. Esta somando todos os valores de i que sejam menores que 5.
      10

2. 
a) 19
   21
   23
   25
   27
   30
   
b) Sim, usando o comando 

*/
// let array = 0
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let indice of lista) {
//     array = lista[indice]
//     console.log(array)
	
// }

/* 3. *
      **
      ***
      ****
*/

//      Exercícios de escrita de código

/* 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um 
por um, e guarde esses nomes em um array
c) Por fim, imprima o array com os nomes dos bichinhos no console */

// const bichos = Number(prompt("Quantos bichinhos de estimaçao voce tem?"))
// let nomes = ""
// let lista = ""

// if (bichos===0) {
//     console.log("Que pena! Você pode adotar um pet!")
// }else {
//     for (i = 0; i < bichos; i++) {
//         nomes = prompt("Digite o nome do seu bicho")
//         lista = [nomes]
//         console.log(lista)
//     }
// }

/* 2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função 
para cada um dos itens abaixo, realizando as operações pedidas:
a) Escreva um programa que **imprime** cada um dos valores do array original.

b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
*/

let array = [50, 20, 11, 65, 80, 15]
function arrayOriginal(array) {
    console.log(array)
}

let divisao = 0
let resultado = 0

function array2(array) {
    for (i=0; i < array.length; i++ ) {
        divisao = array[i] / 10
        resultado = [divisao]
        console.log(resultado)
    }
}
let parArray = []

function array3(array) {
    for (let numero of array) {
        if (numero % 2 ===0) {
            parArray.push(numero)
        }
    }
    console.log(parArray)
}

let arrayCompleto = 0
let frutas = ["banana", "maça", "uva"]

function array4(frutas) {
    for (i=0; i < frutas.length; i++ ) {
        parArray = "O elemento do index " + i + " é: "+ frutas[i]
        arrayCompleto = [parArray]
        console.log(arrayCompleto)
    }  
}


function array5 (array) {
    let maior = array[0]
    let menor = array[0]

    for (let numero of array ) {
        if (numero > maior) {
            maior = numero
        }else if (numero < menor){
            menor = numero
        }
       
        
        
    }
    console.log(`O maior numero é: ${maior} e o menor numero é: ${menor} `)
}

//      Desafios

// 1.
const numero = Number(prompt("Insira um numero"))
let quantidadeChutes = 0
const acerto = " "

function advinha() {
    const chute = Number(prompt("Advinhe o numero digitado"))
    if (chute === numero) {
        acerto = "Acertou!!"
    }else {
        for (i=0; chute !== i; i++) {
            if (chute > numero) {
                console.log("Errrrrrrrou, é menor")
            }else if (chute < numero) {
                console.log("Errrrrrrrou, é maior")
            }
        quantidadeChutes = i
        }
        console.log(acerto);
        console.log("O numero de tentativas foi:", quantidadeChutes);
    }
    
   
}

advinha()