/**
 *  // importa o módulo File System do nodejs - 
 *  lê arquivos e/ou trabalha com outras coisas utilizando JS
 */
const fs = require('fs')
// fs.readFile('./arq1.txt', (error, resposta) => {
//     if(error) { 
//         console.error('Deu ruim**', error.stack)
//         return
//     }

//     console.log('resposta', resposta) // Desse modo o parâmetro 'resposta' carregou o arquivo no buffer, porém está em binário. Então precisa ser convertido
//     console.log('resposta', resposta.toString()) // convertendo o binário para String.
// }) // lê o arquivo

fs.readFile('./arq1.txt', (errorArq1, respostaArq1) => { // callback (errorArq1, respostaArq1)
    if (errorArq1) {
        console.log("Algo de ruim aconteceu no arq1", errorArq1)
        return;
    }
    fs.readFile('./arq2.txt', (errorArq2, respostaArq2) => { //callback (errorArq2, respostaArq2)
        if (errorArq2) {
            console.log("Algo de ruim está acontecendo no arq2", errorArq2)
            return;
        }
        fs.readFile('./arq3.txt', (errorArq3, respostaArq3) => { //callback (errorArq3, respostaArq3)
            if (errorArq3) {

                console.log("Algo deu muito errado no arq3", errorArq3)
                return;
            } 

            const conteudo = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}` 
            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
                if(errorWrite) {
                    console.log("Erro ao gravar novo arquivo", errorWrite)
                    return
                }
                console.log('Arquivo salvo com sucesso.')
            })
        })
    })
})