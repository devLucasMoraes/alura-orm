const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class TurmaController {
    // static quer dizer que esse metodo pode ser chamado no codigo sem ter que criar uma nova instancia de classes (new TurmaController)
    static async pegaTodasAsTurmas(req, res) {
        const { data_inicial, data_final} = req.query
        const where = {}
        data_inicial || data_final ? where.data_inicio = {} : null
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
        data_final ? where.data_inicio[Op.lte] = data_final : null
        try {
            const TodasAsTurmas = await database.Turmas.findAll({
                where
            })
            return res.status(200).json(TodasAsTurmas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaTurma(req, res) {
        const {id} = req.params
        try{
            const umaTurma = await database.Turmas.findOne({
                where : {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaTurma)            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaTurma(req, res) {
        const novaTurma = req.body
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTurma(req, res) {
        const {id} = req.params
        const dadosAtualizados = req.body
        try{
            await database.Turmas.update(dadosAtualizados, {where : {id: Number(id)}})
            const TurmaAtualizada = await database.Turmas.findOne({where: {id: Number(id)}})
            return res.status(200).json(TurmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaTurma(req, res) {
        const {id} = req.params
        try{
            await database.Turmas.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: `Turma com id:${id} deletado com sucesso`})
        } catch (error) {
            return res.status(500).json(error.message)

        }
    }

    static async restauraTurma(req, res) {
        const {id} = req.params
        try{
            await database.Turmas.restore({where: {id: Number(id)}})
            return res.status(200).json({message: `Turma com id:${id} restaurado com sucesso`})
        } catch (error) {
            return res.status(500).json(error.message)
''
        }
    }
    
}

module.exports = TurmaController