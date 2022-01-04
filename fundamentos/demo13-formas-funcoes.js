function minhaFuncao1(parametro) {
    return `aee`
}

// declarando uma função anônima na variável
const minhaFuncao2 = function(parametro1) {
    return `opa ${parametro1}`
}

// Arrow function - Não precisa colocar a palavra function. 
//Passo os parâmetros e utilizo => para indicar que é função
const minhaFuncao3 = (parametro1) => {
    return `Opaa ${parametro1}`
}
// Se utilizar somente 1 parâmetro então não precisa colocar entre parentêses na ARROW function
const minhaFuncao4 = parametro1 => {
    return `Opaaa ${parametro1}`
}

// Posso declarar a função como um VALOR dentro do objeto
const obj1 = {
    minhaFuncao: parametro1 => `Opaa ${parametro1}` //Arrow function
}

console.log(`Chamando a função dentro do objeto: ${obj1.minhaFuncao('opsss')}`)


const obj2 = {
    minhaFuncao (parametro1) { // Não precisou da palavra function para declarar a função - nesse caso dei um nome e coloquei entre parênteses a variável
        return `Opaaa ${parametro1}`
    }
}

console.log(`${obj2.minhaFuncao('--')}`)