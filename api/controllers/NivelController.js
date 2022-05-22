const database = require('../models')

class NivelController {
    // static quer dizer que esse metodo pode ser chamado no codigo sem ter que criar uma nova instancia de classes (new NivelController)
    static async pegaTodosOsNiveis(req, res) {
        try {
            const TodosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(TodosOsNiveis)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmNivel(req, res) {
        const {id} = req.params
        try{
            const umNivel = await database.Niveis.findOne({
                where : {
                    id: Number(id)
                }
            })
            return res.status(200).json(umNivel)            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaNivel(req, res) {
        const novoNivel = req.body
        try {
            const novoNivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaNivel(req, res) {
        const {id} = req.params
        const dadosAtualizados = req.body
        try{
            await database.Niveis.update(dadosAtualizados, {where : {id: Number(id)}})
            const NivelAtualizado = await database.Niveis.findOne({where: {id: Number(id)}})
            return res.status(200).json(NivelAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaNivel(req, res) {
        const {id} = req.params
        try{
            await database.Niveis.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: `Nivel com id:${id} deletado com sucesso`})
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }
}

module.exports = NivelController