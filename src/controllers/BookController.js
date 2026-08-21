//Importando o Modelo "Livro"
const Book = require('../models/Book')

async function store(req, res){
    //Receber os dados
    const title = req.body.title
    const author = req.body.author
    const resume = req.body.resume

    //Solicitar a inserção no BD
    const msg = await Book.save({title, author, resume})

    //Enviar uma resposta
    return res.send(msg)
}

module.exports = { store }
