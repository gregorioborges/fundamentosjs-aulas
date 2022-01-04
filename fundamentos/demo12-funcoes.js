//Declaração de funções
// function nome (pararametro) {
//     ...
// }


function queDiaEHoje(){
    const data = new Date()
    console.log(`Hoje é dia: ${data.getDate()}`)
    console.log(`Estamos no mês: ${data.getMonth()}`)
}

queDiaEHoje()

function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2
    console.log(`A multiplicação de ${valor1} e ${valor2} é: ${resultado}`)
}

multiplicar(2, 8)

const funcionario1 = {
    nome: 'Zezé',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const funcionario2 = {
    nome: 'Maria',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}

function calcularDesconto (salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(funcionario1.salarioBruto, funcionario1.desconto)
funcionario2.salarioLiquido = calcularDesconto(funcionario2.salarioBruto, funcionario2.desconto)

console.log(
    `Salário líquido do Zezé: ${funcionario1.salarioLiquido}`
)

console.log(
    `Salário líquido da Maria: ${funcionario2.salarioLiquido}`
    )

