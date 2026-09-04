//Conexão com o banco de dados
const db = require('../config/db.js')

/**
 * Salva um novo livro no banco de dados.
 * @param {Object} book - Objeto contendo os dados do livro (ex: titulo, autor, etc).
 * 
 * @returns {Promise<Object>} Um objeto indicando o sucesso ou erro da operação.
 */
function save(book) {
    return db.insert(book).into('books')
    .then( _ => {
        return {
            type: "success",
            msg: "Livro inseridos com sucesso!"
        }
    })
    .catch(erro => {
        return {
            type: "error", msg: "Erro: " + erro}
    })
}//fim do salvar


/**
 * Função responsável por buscar todos os livros cadastrados no banco de dados.
 *
 * Realiza uma consulta na tabela "books", selecionando todos os campos
 * e organizando os livros em ordem alfabética pelo título.
 *
 * @returns {Promise<Array|Object>} Retorna uma lista de livros ordenados
 * ou um objeto contendo informações sobre o erro ocorrido.
 */
function all(){
    return db.select('*').from('books')
    .orderBy('title','ASC')
    .then(books => { return books })
    .catch(erro => {
        return { type: "error", msg: "Erro: " + erro}
    })
} //fim do all

//Exportando a função save
module.exports = { save, all } 