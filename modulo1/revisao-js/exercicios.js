// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const ordem = array.sort(function(a, b) {
        return a - b     
    }) 
     return ordem
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const objeto = array
    const arrayPar = objeto.filter((texto) => {
        return texto % 2 === 0
    })
    return arrayPar     
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const objeto = array
    const arrayPar = objeto.filter((texto) => {
        return texto % 2 === 0
    })
    const arrayElevado = arrayPar.map((texto) => {
        return texto ** 2
    })
    return arrayElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = array[0]
    for (i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = 0
    let menor = 0
    
    if (num1 > num2) {
        maior = num1
        menor = num2
    } else {
        maior = num2
        menor = num1
    }
    const dados = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maior % menor === 0,
        diferenca: maior - menor
    }
    return dados
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayPar = []
    for (let i = 0; arrayPar.length < n; i++)
    if (i % 2 === 0) {
        arrayPar.push(i)
    }
    return arrayPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    }else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        return "Escaleno"
    }else {
        return "Isósceles"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const ordem = array.sort(function(a, b) {
        return a - b     
    }) 
     const arrayFinal = [ordem[ordem.length - 2], ordem[1]]
     return arrayFinal
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
    return chamada
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const newPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return newPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const autorizadas = pessoas.filter((dados) => {
        if (dados.altura >= 1.5 && dados.idade < 60 && dados.idade > 14) {
            return dados
        }
    })
    return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizadas = pessoas.filter((dados) => {
        if (dados.altura < 1.5 || dados.idade <= 14 || dados.idade >= 60) {
            return dados
        }
    })
    return naoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    return contas.map((dados) => {
        let soma = dados.compras.reduce((saldo, novoSaldo) => saldo + novoSaldo, 0)
        let saldoFinal = dados.saldoTotal
        return {...dados, saldoTotal: saldoFinal - soma, compras: []}
    })
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}