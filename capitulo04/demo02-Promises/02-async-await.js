const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        /**
         * No outro exemplo estavamos utilizando o mesmo código em 2 pontos para
         * falar que o texto estava vazio, então, vamos fazer uma única tratativa
         * para melhorar o código.
         */
        terminal.question(`${texto}\n`, msg => {
            // Se msg NÃO for VAZIO, então vai entrar no resolve(msg), senão, vai entrar no REJECT
            !!msg ? resolve(msg) : reject(new Error('O campo não pode estar vazio.'))
        })
    })
}

async function main() {
    try {
        const nome = await questionAsync('Qual é o seu nome?')
        const telefone = await questionAsync('Qual é seu telefone?')
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    } catch (error) {
        console.log('Deu ruim***\n', error.stack)
    }
    finally {
        terminal.close()
    }
}
main()