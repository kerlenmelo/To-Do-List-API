const express = require('express') ;
const router = express.Router();

// GET - Buscar todas as tarefas
router.get('/todos', (req, res) => {
    res.send('Aqui estão todas as tarefas!')
})

// GET - Buscar tarefa específica
router.get('/todos/:id', (req, res) => {
    res.send('Aqui está a tarefa!')
})

// POST - Criar uma tarefa
router.post('/todos', (req, res) => {
    res.send('Nova tarefa criada!')
})

// PUT - Atualizar uma tarefa
router.put(`/todos/:id`, (req, res) => {
    res.send('Tarefa atualizada!')
})

// DELETE - Deletar uma tarefa
router.delete(`/todos/:id`, (req, res) => {
    res.send('Tarefa deletada!')
})

module.exports = router; // exporta o router para ser utilizado em outro arquivo