class JogoDaMemoria {
    /**
     * se mandar um obj = { tela: 1, idade: 2, etc: 3}
     * vai ignorar o resto das propriedades e pegar somente a propriedade
     * tela
     */
    constructor({ tela, util }) {
        this.util = util
        this.tela = tela

        // caminho do arquivo, sempre relativo ao index.html
        this.heroisIniciais = [
            { img: './arquivos/batman.png', nome: 'batman' },
            { img: './arquivos/capitao.png', nome: 'capitao' },
            { img: './arquivos/flash.png', nome: 'flash' },
            { img: './arquivos/Goku.png', nome: 'Goku' },
            { img: './arquivos/mario.png', nome: 'mario' },
            { img: './arquivos/tartaruganinja.png', nome: 'tartaruganinja' },
            { img: './arquivos/thor.png', nome: 'thor' },
            { img: './arquivos/wolverine.png', nome: 'wolverine' }
        ]

        this.iconePadrao = './arquivos/padrao.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }

    // para usar o this, não podemos usar Static
    inicializar() {
        // vai pegar todas as funcoes da classe tela!
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        //força a tela a usar o THIS de Jogo da memória
        this.tela.configurarBotaoJogar(this.jogar.bind(this))

        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))

    }

    
    esconderHerois(herois) {
        // vamos trocar a imagem de todos os herois existentes
        // pelo icone padrão
        // como fizemos nos construtor, vamos extrair somente o necessário
        // usando a sintaxe ({ chave: 1 }) estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quando não usamos : (exemplo do id), o JS entende que o nome
        // é o mesmo do valor. Ex. id: id, vira id, 
        const heroisOcultos = herois.map(( { nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        // guardamos os herois para trabalhar com eles depois
        this.heroisEscondidos = heroisOcultos 
    }
    
    exibirHerois(nomeDoHeroi) {
        // vamos procurar esse heroi pelo nome em nossos heroisIniciais
        // vamos obter somente a imagem dele
        const { img } = this.heroisIniciais.find(( { nome }) => nomeDoHeroi === nome )
        // vamos criar a função na tela, para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img)
    }
    
    verificarSelecao(id, nome) {
        const item = { id, nome}
        // vamos verificar a quantidade de herois selecionados
        // e tomar ação se escolheu certo ou errado 
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados) {
            case 0:
                // adiciona a escolha na lista, esperando pela próxima escolha.
                this.heroisSelecionados.push(item)
                break;
                case 1:
                    // se a quantidade de escolhida for 1, significa que 
                    // o usuário só pode escolher mais um
                    //vamos obter o primeiro item da lista
                    const [ opcao1 ] = this.heroisSelecionados
                    
                    // zerar itens para não selecionar mais de dois
                    this.heroisSelecionados = []
                    
                    // conferindo se os nomes e ids batem conforme o esperado
                    if (opcao1.nome === item.nome &&
                        // aqui verificamos se são ids diferentes para
                        // o usuario não clicar duas vezes no mesmo desenho
                        opcao1.id !== item.id
                        ) {
                            this.exibirHerois(item.nome)
                            // para a execucao
                            this.tela.exibirMensagem()
                            // para a execucao
                            return;
                        }
                        
                        this.tela.exibirMensagem(false)
                        
                        // fim do case
                        break;
                    }
                }

                async embaralhar() {
                // embaralhar() {
                    const copias = this.heroisIniciais
                    //duplicar os itens
                    .concat(this.heroisIniciais)
                    // entrar em cada idem e criar um ide aleatório
                    .map(item => {
                        return Object.assign({}, item, { id: Math.random() / 0.5})
                    })
                    // ordenar aleatoriamente
                    .sort(() => Math.random() - 0.5)
                    
                    this.tela.atualizarImagens(copias)
                    this.tela.exibirCarregando()

                    const idDoIntervalo = this.tela.iniciarContador()

                    // vamos esperar 1 segundo para atualizar a tela
                    // setTimeout(() => {
                    //     this.esconderHerois(copias)
                    // }, 1000);
                    
                    // vamos esperar 3 segundos para atualizar a tela
                    await this.util.tempo(3000);
                    this.tela.limparContador(idDoIntervalo)
                    this.esconderHerois(copias)
                    this.tela.exibirCarregando(false)


                }
                
                mostrarHeroisEscondidos() {
                    // vamos pegar todos os herois da tela e colocar seu
                    // respectivo valor correto
                    const heroisEscondidos = this.heroisEscondidos
                    for(const heroi of heroisEscondidos) {
                        const { img } = this.heroisIniciais.find(item => item.nome === heroi.nome)
                        heroi.img = img
                    }
                    this.tela.atualizarImagens(heroisEscondidos)
                }

                jogar() {
                    console.log('clicou!')
                    this.embaralhar()
                    
                }
            }  