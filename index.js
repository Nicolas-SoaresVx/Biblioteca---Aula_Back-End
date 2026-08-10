const express = require('express'); //importando o express
const app = express() 
const port = 3000

//Definindo o ejs como motor de template padrão
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.get('/books/new', (req, res) => {
  res.render('pages/book_form')
})

app.listen(port, () => {
  console.log(`O servidor está funcionando na porta ${port}`)
})