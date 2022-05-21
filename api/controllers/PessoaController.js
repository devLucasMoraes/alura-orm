const database = require('../models')

class PessoaController {
    // static quer dizer que esse metodo pode ser chamado no codigo sem ter que criar uma nova instancia de classes (new pessoaController)
    static async pegaTodasAsPessoas(req, res) {
        try {
            const TodasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(TodasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController