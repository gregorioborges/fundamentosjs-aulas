// Trabalhando com Classe

class Heroi {
    atacar(){
        console.log(`Atacou!!`)
    }
    defender(){
        console.log(`Defendeu!!`)
    }
}

// Para criar uma classe, temos que atribui-la a uma variável e essa variável deve receber 'new + nome da classe()'
// Criando uma classe.
const heroi = new Heroi()
heroi.atacar()
heroi.defender()

// usando o Constructor na classe

class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    atacar() {
        console.log(
            `O ${this.nome} atacou!!`
        )
    }
}

const heroi2 = new Heroi2(`Batman`, 39) // No momento de criar a classe eu tenho que passar os Parâmetros.
heroi2.atacar()



// Utilizando a palavra reservada Static ao invés de This. Desse modo não precisa utilizar a palavra chave new
// esse utilização de classe também é chamada de funções helper ou úteis
// class Static é utilizado para valores que não se alteram - na dúvida utiliza o outro tipo de classe
class Heroi3 {
    static ObterAnoNascimento(idade) {
        return 2021 - idade
    }
}

const anoNascimento = Heroi3.ObterAnoNascimento(30)
console.log(`Ano de nascimento: ${anoNascimento}`)