let termoDeParada = true
let contador = 0
while(termoDeParada) {
    termoDeParada = contador < 10
    if(contador % 2 === 0) {
        console.log('Numero par', contador)
    } else {
        console.log('Número IMPAR', contador)
    }
    contador += 1
}

do {
    console.log('Executa somente uma vez, pois o termoDeParada é', termoDeParada)
} while(termoDeParada)

