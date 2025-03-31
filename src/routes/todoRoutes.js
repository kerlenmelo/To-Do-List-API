const express = require('express') ;
const router = express.Router();
const todoController = require('../controllers/todoController.js');

// GET - Buscar todas as tarefas
router.get('/todos', todoController.getAllTodos)

// GET - Buscar tarefa específica
router.get('/todos/:id', todoController.getTodoByID)

// POST - Criar uma tarefa
router.post('/todos', todoController.createTodo)

// PUT - Atualizar uma tarefa
router.put(`/todos/:id`, todoController.updateTodo)

// DELETE - Deletar uma tarefa
router.delete(`/todos/:id`, todoController.deleteTodo)

module.exports = router; // exporta o router para ser utilizado em outro arquivo