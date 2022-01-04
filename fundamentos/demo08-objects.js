const heroi = {
    nome: 'batman',
    idade: 100,
    sexo: 'Masculino'
}

// console.log('nome', heroi.nome)
// console.log('idade', heroi['idade'])
// console.log('sexo', heroi.sexo)
// console.log('naoExiste', heroi.naoExiste)

// heroi.id = 0001

// console.log('ID: ', heroi.id)
// console.log(heroi)

//Dessa forma ele vai mostrar somente as chaves do objeto.
// console.log(Object.keys(heroi))

// // Dessa forma mostra somente os valores do objeto.
// console.log(Object.values(heroi))



// JUNTAR DOIS OBJETOS
const pessoa = {
    tamanho: '10 metros'
}
// object.assign está juntando dois objetos, no caso o objeto 'heroi' e o 'pessoa'
const novoOBJ = Object.assign(heroi, pessoa)
delete novoOBJ.nome //deletando a chave de dentro do objeto.
console.log(novoOBJ)

//Por convensão o objeto não é alterado,
//mas a maneira ideal é criar um novo objeto e depois junta-los.