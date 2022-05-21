const bodyParser = require('body-parser')

module.exports = app => {
// metodo use serve para avisar para o express que vai ter alguma blibioteca que vai fazer um 
// meio de campo entre as requisicoes e o express 
    app.use(bodyParser.json())
    app.get('/', (req, res) => res.send('ola!!'))
}