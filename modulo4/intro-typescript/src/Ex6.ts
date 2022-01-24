// Exercicio 6

// Exercício 1
function numeros(num1: number, num2: number): void {

    const soma: number = num1 + num2
    const sub: number = num1 - num2
    const mult: number = num1 * num2

    let maiorNumero: number 

    if(num1 > num2){
        maiorNumero = num1
    }else{
        maiorNumero = num2
    }

    console.log( 
    `Soma = ${soma},
     Subtraçao = ${sub},
     Multiplicaçao =  ${mult},
     Maior número = ${maiorNumero}`)
}

numeros(5, 7)