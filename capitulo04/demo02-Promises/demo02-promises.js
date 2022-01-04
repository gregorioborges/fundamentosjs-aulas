const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// callback
// terminal.question('Qual é o seu nome?\n', nome => {
//     terminal.question('Qual é o seu telefone?\n', telefone => {
//         console.log(
//             ` 
//             Nome: ${nome},
//             Telefone: ${telefone}
//             ` 
//         )
//         terminal.close()
//     })
// })

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome = ""
let telefone = ""

// Em Promise utilizamos o .then para fazer as tratativas logo de inicio.
// aqui vamos chamar o Promise.resolve vazio para fazer a primeira chamada - 
// sinceramente não entendi o motivo desse promise.resolve()
Promise.resolve()
    .then(() => questionAsync("Qual é o seu nome?")) // aqui estou passando o .then() vazio, chamando a promise - Na parte do telefone é a mesma coisa.
    .then(respostaNome => {
        if(!respostaNome) throw new Error('campo vazio!') // captura o erro que gerou na promise
        nome = respostaNome
    })
    .then(() => questionAsync("Qual é o seu telefone?"))
    .then(respostaTelefone => {
        if(!respostaTelefone) throw new Error('campo vazio')
        telefone = respostaTelefone
    })
    .then(() => {
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    })
    .catch(error => {
        console.error('Deu ruim***', error.stack) 
    })
    .finally(() => terminal.close())