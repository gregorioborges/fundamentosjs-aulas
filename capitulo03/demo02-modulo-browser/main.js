window.onload = () => { // window.onload vai carregar todos os arquivos
    console.log('Tela carregou')
    const btn = document.getElementById('btnCalcular') //atribuo a constante para receber o Botão
    btn.onclick = ClickDoBotao // O Botão vai receber a função que foi passada, nesse caso ClickDoBotao

    // Essa função vai receber o valor que está atribuido ao Input no HTML
    // o valor será passado no momento de fazer as operações.
    function obterValorInput(id){
        const item = document.getElementById(id)
        return item.value
    }

    function ClickDoBotao() {
        const tipoOperacao = obterValorInput('tipoOperacao')
        const valor1 = obterValorInput('valor1')
        const valor2 = obterValorInput('valor2')

        /**
         * //estou passando para a classe Matematica 
         *  o nome do operador que obtive quando , nesse caso é dividir ou subtrair.
         */
        const resultado = Matematica[tipoOperacao] ( 

            valor1, valor2
        )
        console.log(`Resultado de ${tipoOperacao}: ${resultado}`)
        document.getElementById('resultado').innerText = `
            A operação de ${tipoOperacao}, ${valor1} e ${valor2} é ${resultado}    
        `
    }
} 


/* Vai obter o tipo da operação marcada no Select no arquivo html.
Estou chamando o elemento tipoOperacao pelo ID e depois chamando 
o atributo que está dentro dele pelo campo value
const tipoOperacao = document.getElementById('tipoOperacao')
console.log('tipoOperacao', tipoOperacao.value)
*/