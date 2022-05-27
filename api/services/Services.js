const database = require('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async PegaTodosOsRegistros() {
        return database[this.nomeDoModelo].findAll()
    }
}

module.exports = Services