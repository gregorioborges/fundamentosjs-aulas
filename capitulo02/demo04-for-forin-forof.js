const textoPar = 'Par'
const textoImpar = 'Impar'
// for(let index = 0; index <= 10; index++) {
//     const decisao = index % 2 === 0 ? textoPar : textoImpar
//     console.log(`O número ${index} é ${decisao}`)
// }

const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10), //parseInt vai ignorar as casas decimais.
        nome: 'Zezé',
        superPoder: 'Veloz'
    },
    {
        id: Math.random(),
        nome: 'Mariazinha',
        superPoder: 'Super força'
    }
]

// for(let index = 0; index < minhaListaDeTarefas.length; index++){
//     const item = minhaListaDeTarefas[index]
//     console.log(`
//         id: ${item.id}
//         Nome: ${item.nome}
//         superpoder: ${item.superPoder}
//     `)
// }

// não precisa do contador
// for(const index in minhaListaDeTarefas){
//     const item = minhaListaDeTarefas[index]
//     console.log(`
//         ID: ${item.id}
//         NOME: ${item.nome}
//         SUPERPODER: ${item.superPoder}
//     `)
// }



// nÃO PRECISA UTILIZAR O INDICE
for (const item of minhaListaDeTarefas){
    console.log(`
        Name: ${item.nome}
    `)
}