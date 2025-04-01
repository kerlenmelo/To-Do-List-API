const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController.js');
const { body, check } = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware.js');
const checkTodoOwner = require('../middlewares/checkTodoOwner.js');
const validationHandler = require('../middlewares/validationHandler.js');

// Middleware para proteger todas as rotas
router.use(authMiddleware)

// GET - Buscar todas as tarefas
router.get('/', todoController.getAllTodos)

// GET - Buscar tarefa específica
router.get('/:id', checkTodoOwner, todoController.getTodoByID)

// POST - Criar uma tarefa
router.post('/',
    [
        body('title')
            .notEmpty()
            .withMessage('O título é obrigatório')
            .isLength({ min: 3 })
            .withMessage('O título deve ter pelo menos 3 caracteres'),
    ],
    validationHandler,
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
    validationHandler,
    checkTodoOwner,
    todoController.updateTodo
)

// DELETE - Deletar uma tarefa
router.delete(`/:id`, checkTodoOwner, todoController.deleteTodo)

module.exports = router; // exporta o router para ser utilizado em outro arquivo
