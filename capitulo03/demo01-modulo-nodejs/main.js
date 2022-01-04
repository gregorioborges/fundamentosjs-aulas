
/**
 * o Require é utilizado para importar o módulo que foi exportado por outro arquivo.
 *  requi('./local do arquivo')
 *  */ 
const Matematica = require('./matematica') 

/**
 * //O módulo readline provê uma interface para leitura de dados 
 * de um stream Readable (como o process. stdin) uma linha por vez 
 */
const readline = require('readline') 
const terminal = readline.createInterface({ // a constante terminal vai receber as entradas do teclado
    input: process.stdin,
    output: process.stdout
})

// Pega os valores passado pelo cliente
terminal.question('Insira o primeiro valor\n', valor1 => {
    terminal.question('Insira o Segundo valor valor\n', valor2 => {
        terminal.question('Insira a operacao\n', tipoOperacao => {
            const resultado = Matematica[tipoOperacao]( // No final a classe é um objeto - para acessar os atributos do objeto, utilizamos colchetes[] ou ponto.
                Number(valor1), Number(valor2) // passando os dois parâmetros para a função tipoOperacao que está no ouro módulo (matematica.js).
            )
            console.log(
                `A operação ${tipoOperacao} de ${valor1} e ${valor2} é ${resultado}`
            )
            terminal.close()
        })
    })
})