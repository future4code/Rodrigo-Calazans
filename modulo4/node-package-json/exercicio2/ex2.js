// Exercicio 2

const operacao = process.argv[2]
const num1 = process.argv[3]
const num2 = process.argv[4]

const app = (op, n1, n2) => {
    switch (op){
        case "add":
            return Number(n1) + Number(n2)
        case "sub":
            return Number(n1) - Number(n2)
        case "mult":
            return Number(n1) * Number(n2)
        case "div":
            return Number(n1) / Number(n2)
    }
}

console.log(app(operacao, num1, num2));