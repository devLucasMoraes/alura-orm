const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// metodo use serve para avisar para o express que vai ter alguma blibioteca que vai fazer um 
// meio de campo entre as requisicoes e o express 
app.use(bodyParser.json())

const port = 3000

app.get('/teste', (req, res) => res
    .status(200)
    .send({mensagem: 'Boas-vindas à API'}
))

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app