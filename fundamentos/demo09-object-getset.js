/**
 * let _nome - uma variável/chave declarada com _ na frente do nome, significa que a 
 * variável/chave é  privada. 
 * Então, não é interessante acessar essa variável fora do escopo declarado.
 * 
 */

// const pessoa = {
//     _nome: '', // chave privada - não é acessada sem o _ 
//     get nome () { // vai receber o valor passado em pessoa._nome
//         return this._nome // o this é utilizado para acessar a chave do objeto.
//     },
//     set nome(valor) { // Aqui vamos acessar a chave nome e vamos setar um valor para essa chave.
//         // depois que passar o valor para a chave nome, vamos atribuir o comando .toUpperCase() 
//         //para o valor passado.
//         this._nome = valor.toUpperCase() // a chave privada _nome vai receber o valor em caixa alta
//     }
// }

// pessoa.nome = "Maria do céu"
// console.log(pessoa.nome)


const pessoa ={
    _nome: '', 
    _idade: 20,
    
    get nome () {
        return this._nome
    },
    
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },

    get podeDirigir() {
        return this._idade > 18

    },

    set idade(valor2){
        this._idade = valor2
    },

    get idade() {
        return this._idade // se for querer exibir algum valor setado, então temos que ter o GET declado no objeto.
    }
}

pessoa.idade = 16
console.log(pessoa.idade)
console.log(pessoa.podeDirigir)