/* 1-
a = false
b = false
c = true
d = boolean
*/

/* 2-
Sim, ele esta tentando somar numeros que estao como string.
Vai acontecer uma concatenação, ou seja, ira exibir os dois numeros juntos.

3-
Para que de certo ele pode colocar:
    const soma = Number(primeiroNumero) + Number(segundoNumero) */


    /* Exercicios de escrita
1. */
/*
const idade = prompt("Qual a sua idade?")
const idadeAmigo = prompt("Qual a idade do seu melhor amigo(a)?")

console.log("Sua idade é maior que a do seu melhor amigo?", idade > idadeAmigo)
console.log("A diferença de idade é de:", Number(idade) - Number(idadeAmigo)) 
*/

// 2.
/*
const par = prompt("Insira um numero par")

console.log(Number(par) % 2)
*/

// c) O resultado é sempre 0 porque qualquer numero par dividido por 2 é um numero inteiro e não deixa resto.

// d) Haverá sempre um resto de divisão no valor de 1.

// 3.
/*
const idade = prompt("Quantos anos voce tem?")

console.log("Sua idade em meses é de:", idade * 12)
console.log("Sua idade em dias é de:", idade * 12 * 365 )
console.log("Sua idade em horas sera:", idade * 12 * 365 * 24)
*/

// 4.
/*
const num1 = prompt("Digite um numero")
const num2 = prompt("Digite outro numero")

console.log("O primeiro numero é maior que segundo?", num1 > num2)
console.log("O primeiro numero é igual ao segundo?", num1 === num2)
resultado1 = num1 / num2
resultado2 = num2 / num1

console.log("O primeiro numero é divisível pelo segundo?", resultado1 >= 1)
console.log("O segundo numero é divisível pelo primeiro?", resultado2 >= 1)
*/

/* Desafios
1. a) */
/*
let KELVIN = (77 - 32)*(5/9) + 273.15
console.log("O valor em kelvin sera:", KELVIN, "K")

//b
let GRAUS_FAHRENHEIT = (80)*(9/5) + 32
console.log("O valor em Fahrenheit sera:", GRAUS_FAHRENHEIT, "F")

//c
GRAUS_FAHRENHEIT = (30)*(9/5) + 32
KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

console.log("Em Fahrenheit:", GRAUS_FAHRENHEIT, "F", "e em Kelvin:", KELVIN, "K")

// d)
GRAUS_CELSIUS = (GRAUS_FAHRENHEIT - 32) / (9/5)

console.log("sera:", GRAUS_CELSIUS)
*/

// 2. 
/*
let contaEnergia = prompt("Quanto voce paga na conta de energia?")
quilowatts = contaEnergia / 0.05

// a)
quilowatts = 280 * 0.05
console.log("Valor a ser pago sera de:", quilowatts)

//b
quilowatts = 280 * 0.05 * 0.85
console.log("O valor a ser pago sera:", quilowatts)
*/

//3 a)
Quilo = ("libra") / 2.205
Quilo = 20 / 2.205
console.log("20 lb equivalem a ", Quilo, "kg")

// b)
Quilo = "onça" / 35.274
Quilo = 10.5 / 35.274
console.log("10.5 oz equivalem a", Quilo, "kg")

// c)
Metro = "milha" * 1609.34
Metro = 100 * 1609.34
console.log("100 mi equivalem a", Metro, "m")

// d)
Metro = "pés" / 3.281
Metro = 50 / 3.281
console.log("50 ft equivalem a", Metro, "m")

// e)
litro = "galao" * 3.785
litro = 103.56 * 3.785
console.log("103.56 gal equivalem a", litro, "l")

// f) 
litro = "xicara" / 3.519
litro = 450 / 3.519
console.log("450 xic equivalem a", litro, "l")

// g)
const pes = prompt("Quantos pes voce quer converter para metros?")
Metro = pes / 3.281
console.log(pes, "ft equivalem a", Metro, "m")



































