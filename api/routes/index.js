const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
// metodo use serve para avisar para o express que vai ter alguma blibioteca que vai fazer um 
// meio de campo entre as requisicoes e o express 
    app.use(bodyParser.json(), pessoas, niveis, turmas)
    app.get('/', (req, res) => res.send('ola!!'))
}