// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Digite a altura")
  const largura = prompt("Digite a largura")
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento"))
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  console.log(imc)
  return imc 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Qual a sua idade?")
  const email = prompt("Qual o seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`) 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua cor favorita")
  const cor2 = prompt("Digite outra cor favorita")
  const cor3 = prompt("Digite outra cor favorita")
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const caps = string.toUpperCase()
  return caps
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const lucro = custo / valorIngresso
  return lucro
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanho = (string1.length) === (string2.length) 
  return tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const array1 = array[0]
  return array1
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const arrayLast = array[array.length - 1]
  return arrayLast
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const array1 = array[0]
  const array10 = array[array.length - 1]
  array[0] = array10
  array[array.length - 1] = array1
  return array 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const teste1 = string1.toUpperCase()
  const teste2 = string2.toUpperCase()
  const igual = teste1 === teste2
  return igual
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento"))
  const anoIdentidade = Number(prompt("Digite o ano que sua identidade foi emitida"))
  const idade = anoAtual - anoNascimento
  const tempoIdentidade = anoAtual - anoIdentidade
  
  const vinteAnos = idade <= 20 && tempoIdentidade >= 5
  const vinteCinquenta = (idade > 20, idade <= 50) && tempoIdentidade >= 10
  const cinquentaAnos = idade > 50 && tempoIdentidade >= 15 
  const valorFinal = vinteAnos || vinteCinquenta || cinquentaAnos
  console.log(valorFinal)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multiploQuatrocentos = ano % 400 === 0
  const multiploDeQuatro = ano % 4 === 0
  const multiploCem = ano % 100 === 0
  const cemQuatrocentos = multiploQuatrocentos || !multiploCem
  const resultado = multiploDeQuatro && cemQuatrocentos
  return resultado
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você possui ensino médio completo?")
  const ensino = prompt("Você possui ensino médio completo?")
  const curso = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const exigencia1 = idade === "sim"
  const exigencia2 = ensino === "sim"
  const exigencia3 = curso === "sim"

  const resultado = exigencia1 && exigencia2 && exigencia3
  console.log(resultado) 
}
