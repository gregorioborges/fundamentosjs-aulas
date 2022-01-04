function onLoad() {
    // console.log(`Carregou a tela!!`, Tela, JogoDaMemoria)
    // const heroi = {
    //     // sempre relativo ao index.html
    //     img: './arquivos/batman.png',
    //     nome: 'batman'
    // }
    // const codigoHtml = Tela.obterCodigoHtml(heroi)
    // Tela.alterarConteudoHTML(codigoHtml.concat(codigoHtml).concat(codigoHtml).concat(codigoHtml))

    // Tela.atualizarImagens([
    //     heroi,
    //     heroi,
    //     heroi
    // ])


    const dependencias = {
        tela: Tela // a classe Tela é global
    }

    // inicializamos o jogo da memoria
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar() 

 
}
window.onload = onLoad