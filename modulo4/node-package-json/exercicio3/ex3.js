// Ecercicio 3

const tarefa = process.argv[2]

const lista = (tarefa)=> {
    let listaTarefas = []
    let novaLista = listaTarefas.push(tarefa)
    return novaLista
}

console.log(lista(tarefa));