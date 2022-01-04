// meses começão do 0-janeiro / 1-Fevereiro / 2-Março ... 
const dataAniversario = new Date(2020, 0, 10)
// console.log(dataAniversario) // tem que exibir '2020-01-10T04:00:00.000'

const primeiraDataDoJS = new Date(0)
// console.log(primeiraDataDoJS.getTime()) // tem que exibir 1970-01-01T00:00:00.000Z - 1970 foi a década que de lançamento do javaScript, mas foi em 1973 que a linguagem foi lançada.
// console.log(primeiraDataDoJS)

const hoje = new Date()
// console.log(hoje.toString())
// console.log(hoje.toLocaleDateString())

// Esse modo de data é o padrão entre os desenvolvedores
// console.log(hoje.toISOString())

const dia = hoje.getDate()
hoje.setDate(dia + 5) // +5 dias depois de hoje
// hoje.setHours(10, 30, 0)
console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
`)

console.log(
    new Date(2021, 12, 23) > new Date(2021, 12, 20)
)