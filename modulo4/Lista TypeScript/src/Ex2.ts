// Exercicio 2
// a) As entradas sao os numeros que a pessoa digitar e a saida é o maior numero digitado, menor e a media 
// deles.

function obterEstatisticas(numeros: number) {

    const numerosOrdenados: number = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// b) 

// c)
type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (number: number[]) => Estatisticas
}

const amostraDeIdades: AmostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas() 
}