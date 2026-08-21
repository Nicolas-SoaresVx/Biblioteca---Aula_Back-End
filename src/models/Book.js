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
            type: "error", msg: "Erro" + erro}
    })
}//fim do salvar

//Exportando a função save
module.exports = { save } 