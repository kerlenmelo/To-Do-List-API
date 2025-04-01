const Todo = require('../models/Todo')

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params
        const todo = await Todo.findOne({ where: { id, userId: req.user.id } })
        
        if(!todo) {
            return res.status(404).json({ error: 'Tarefa não encontrada ou não pertence a você' })
        }

        req.todo = todo
        next()
    } catch (error) {
        console.error('Erro ao verificar posse da tarefa:', error)
        res.status(500).json({ error: 'Erro interno ao verificar tarefa' })
    }
}