const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

// const pController = new PessoaController nao precisa instanciar isso pois colocamos static 
router.get('/pessoas', PessoaController.pegaTodasAsPessoasAtivas)
router.get('/pessoas/todas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)
router.post('/pessoas/:id/restaurar', PessoaController.restauraPessoa)
router.post('/pessoas/:estudanteId/cancela', PessoaController.CancelaPessoa)

router.get('/pessoas/:estudanteId/matricula/', PessoaController.pegaTodasAsMatriculas)
router.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
router.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
router.get('/pessoas/:estudanteId/matriculaAtivas/', PessoaController.pegaTodasAsMatriculasAtivas)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)
router.post('/matricula/:id/restaurar', PessoaController.restauraMatricula)

module.exports = router

