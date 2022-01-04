const podedirigir = true
if (podedirigir) {
    console.log('Ela pode dirigir')
}

const saldoEmConta = 8
if (!saldoEmConta) {
    console.log('não tem saldo!')
}

const boolComString = "ae hacker!!"

/**
 * Vai forçar o valor a ficar True ou False
 * Nesse caso o valor de boolComString é verdadeiro, 
 * utilizando duas !! o valor se manteve verdadeiro.
 */
console.log('boolComString', !!boolComString)

// negação
console.log('negação', !boolComString)

//negação + forçar a bool
console.log(
    'negação + forçar bool',
    ! ( !!boolComString)
)