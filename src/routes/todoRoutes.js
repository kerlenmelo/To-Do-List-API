const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController.js');
const { body } = require('express-validator')

// GET - Buscar todas as tarefas
router.get('/', todoController.getAllTodos)

// GET - Buscar tarefa específica
router.get('/:id', todoController.getTodoByID)

// POST - Criar uma tarefa
router.post('/',
    [
        body('title')
            .notEmpty()
            .withMessage('O título é obrigatório')
            .isLength({ min: 3 })
            .withMessage('O título deve ter pelo menos 3 caracteres'),
    ],
    todoController.createTodo
)

// PUT - Atualizar uma tarefa
router.put(`/:id`, 
    [
        body('title')
            .optional()
            .isLength({ min: 3 })
            .withMessage('O título deve ter pelo menos 3 caracteres'),
        body('completed')
            .optional()
            .isBoolean()
            .withMessage('O campo "completed" deve ser um booleano')
    ],
    todoController.updateTodo
)

// DELETE - Deletar uma tarefa
router.delete(`/:id`, todoController.deleteTodo)

module.exports = router; // exporta o router para ser utilizado em outro arquivo