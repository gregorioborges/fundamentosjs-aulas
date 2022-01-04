let minhaListaDeTarefas = [
    'Jogar o lixo fora',
    'Dar comida pro cachorro',
    'Lavar o carro'
]

// exibir os itens dentro do array - o que não existir vai mostrar Undefined
// console.log(minhaListaDeTarefas[0])
// console.log(minhaListaDeTarefas[1])
// console.log(minhaListaDeTarefas[2])
// console.log(minhaListaDeTarefas[3]) //undefined

// // quantidade de itens no array
// console.log(minhaListaDeTarefas.length)

// //adicionar item
// console.log(minhaListaDeTarefas.push('Estudar'))
// console.log(minhaListaDeTarefas[3])

// //remover ultimo da lista
// const ultimo = minhaListaDeTarefas.pop()
// console.log(`Foi removido o último valor da lista, '${ultimo}'. Sobrou`, minhaListaDeTarefas)

// //remover o primeiro valor da lista
// const primeiro = minhaListaDeTarefas.shift()
// console.log(`O primeiro valor da lista foi removido, '${primeiro}'. 
// Sobraram os itens`, minhaListaDeTarefas)

// remover um item específico a partir de um índice
// console.log(minhaListaDeTarefas[2])
// // Vai começar a apagar a partir do índice 2 e vai apagar somente 1 item.
// minhaListaDeTarefas.splice(2, 1)
// console.log(minhaListaDeTarefas)

const itens = [
    1, 'computador', 0.22
]

// verificar o tipo de array
// console.log(typeof(itens))

// //verificar se é array da forma correta
// console.log(Array.isArray(itens))

// // order o array
// const numeros = [3, 1, 5, 4, 0, 2]
// const letras = ['b', 'a', 'd', 'e', 'c']
// console.log(numeros.sort(), letras.sort())

// // juntar dois Arrays
// const novo = itens.concat([1, 2, 3])
// console.log(novo)

// Juntar arrays em uma string e separar pelo o que você definir, nesse caso separei por hífen
console.log(itens.join(' - '))

// verificar indice do item
const index = itens.indexOf('computador')
if (index){
    console.log('True - ', index)
}
// mostra o conteúdo da posição
console.log(itens[index])