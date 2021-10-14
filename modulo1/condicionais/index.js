// INTERPRETAÇAO DE CODIGO 
/* 1.
a) Testa se o resto da divisao do numero por 2 é igual a 0. 
b) Para os numeros pares.
c) Para numeros impares.

2.
a) Para saber o preço da fruta que a pessoa escolheu.
b) O preço da fruta Maçã é R$ 2.25
c) O preço da fruta Pêra é R$ 5
    Isso porque sem o break ele pegaria o ultimo preco.  

3.
a) Alterando de String pra Number o que a pessoa digitar.
b) Esse numero passou no teste
   
   Se fosse -10 nao apareceria nada
c) Sim. Vai aparecer que mensagem nao esta definida pois esta dentro do escopo de If e da forma que o codigo 
    foi escrito nao pode ser acessada fora dele.
   */

//  ESCRITA DE CODIGO 

/* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela 
    pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
     Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/
// const idade = Number(prompt("Qual a sua idade?"))

// if (idade>=18) {
//     console.log("Voce pode dirigir")
// } else {
//     console.log("Você não pode dirigir");
// }

/* 2. Agora faça um programa que verifica que turno do dia um aluno estuda.
Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
*/

// const turno = prompt("Digite o turno que vc estuda: M(matutino), V(vespertino) e N(noturno)")

// if (turno === "M") {
//     console.log("Bom dia!");
// } else if (turno==="V") {
//     console.log("Boa tarde!");
// } else if (turno==="N") {
//     console.log("Boa noite!");
// }

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const turno = prompt("Digite o turno que vc estuda: M(matutino), V(vespertino) e N(noturno)").toUpperCase()

// switch (turno) {
//     case "M":
//         console.log("Bom dia!")
//         break;
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
    
// }

/* 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só 
assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais.
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre 
o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
Caso positivo, imprima no console a mensagem: 
"Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/
// const genero = prompt("Qual o genero do filme?").toLowerCase()
// const preco = Number(prompt("Qual o preço do ingresso?"))

// if (genero === "fantasia" && preco < 15) {
//     console.log("Bom filme!");
// } else {
//     console.log("Escolha outro filme");
// }

//  DESAFIO 

/* 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir 
a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai 
comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e 
"Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.
*/
// const genero = prompt("Qual o genero do filme?").toLowerCase()
// const preco = Number(prompt("Qual o preço do ingresso?"))

// if (genero === "fantasia" && preco < 15) {
//     const lanche = prompt("Qual lanche voce vai querer?")
//     console.log("Bom filme!", "Aproveite o seu", lanche );
// } else {
//     console.log("Escolha outro filme");
// }

/* 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
Para esta compra, o usuário deve fornecer algumas informações:
- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos
*/

const nome = prompt("Qual o seu nome?")
const tipo = prompt("Tipo de jogo? IN ou DO")
const etapa = prompt("Etapa do jogo? SF, DT ou FI ")
const categoria = Number(prompt("Categoria? 1, 2, 3 ou 4"))
const quantidadeIngresso = Number(prompt("Qual a quantidade de ingressos?"))

if (tipo === "IN") {
    if (etapa==="SF") {
        if (categoria===1) {
            valor = 1320 * 4.1
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===2) {
            valor = 880 * 4.1
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===3) {
            valor = 550 * 4.1
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===4) {
            valor = 220 * 4.1
            valorTotal = quantidadeIngresso * valor 
        }
    }else if (etapa === "DT") {
        if (categoria===1) {
            valor = 660 * 4.1
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===2) {
            valor = 440 * 4.1
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===3) {
            valor = 330 * 4.1
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===4) {
            valor = 170 * 4.1
            valorTotal = quantidadeIngresso * valor 
        }
    }else if (etapa=== "FI") {
        if (categoria===1) {
            valor = 1980 * 4.1
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===2) {
            valor = 1320 * 4.1
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===3) {
            valor = 880 * 4.1
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===4) {
            valor = 330 * 4.1
            valorTotal = quantidadeIngresso * valor 
        }
    }

} else if (tipo === "DO") {
    if (etapa==="SF") {
        if (categoria===1) {
            valor = 1320
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===2) {
            valor = 880
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===3) {
            valor = 550
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===4) {
            valor = 220
            valorTotal = quantidadeIngresso * valor 
        }
    }else if (etapa === "DT") {
        if (categoria===1) {
            valor = 660
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===2) {
            valor = 440
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===3) {
            valor = 330
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===4) {
            valor = 170
            valorTotal = quantidadeIngresso * valor 
        }
    }else if (etapa=== "FI") {
        if (categoria===1) {
            valor = 1980
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===2) {
            valor = 1320
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===3) {
            valor = 880
            valorTotal = quantidadeIngresso * valor 
        }else if (categoria===4) {
            valor = 330
            valorTotal = quantidadeIngresso * valor 
        }
    }
}

console.log("---Dados da compra---")
console.log("Nome do cliente:", nome)
console.log("Tipo de jogo:", tipo)
console.log("Etapa do jogo:", etapa)
console.log("Categoria:", categoria)
console.log("Quantidade de Ingressos:", quantidadeIngresso)
console.log("---Valores---")
console.log("Valor do ingresso: R$", valor)
console.log("Valor total: R$", valorTotal)










 














