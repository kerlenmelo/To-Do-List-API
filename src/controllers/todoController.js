const Todo = require('../models/Todo');
const { validationResult } = require('express-validator');

// Buscar todas as tarefas
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        
        if (todos.length === 0) {
            return res.status(200).json([])
        } 
        res.json(todos)
        
    } catch (error) {
        console.error('Erro ao buscar todas as tarefas:', error)
        res.status(500).json({ error: "Erro interno no servidor" })
    }
    
}

// Buscar uma tarefa específica
exports.getTodoByID = async (req, res) => {
    try {
        const { id } = req.params
        const todo = await Todo.findByPk(id);

        if (!todo) {
            return res.status(404).json({ error: "Tarefa não encontrada!"})
        }
        res.status(200).json(todo)

    } catch (error) {
        console.error('Erro ao buscar tarefa:', error)
        res.status(500).json({ error: "Erro interno no servidor" })
    }
}

// Criar uma tarefa
exports.createTodo = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const { title } = req.body
        const novoTodo = await Todo.create({ title })
        res.status(201).json(novoTodo)
    } catch (error) {
        console.error('Erro ao criar tarefa:', error)
        res.status(500).json({ error: "Erro interno no servidor" })
    }
}

// Atualiza uma tarefa
exports.updateTodo = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    
    try {
        const { id } = req.params
        const { title, completed } = req.body

        const todo = await Todo.findByPk(id)
    
        if (!todo) {
            return res.status(404).json({ error: "Erro ao atualizar tarefa. Tarefa não encontrada!"})
        }

        // Atualiza tarefa no banco
        await todo.update({ title, completed })
        res.status(200).json(todo)
        
    } catch (error) {
        console.error('Erro ao atualizar tarefa:', error)
        res.status(500).json({ error: "Erro interno no servidor" })
    }
}

// Deletar uma tarefa
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        const todo = await Todo.findByPk(id)

        if (!todo) {
            return res.status(404).json({ error: "Erro ao deletar tarefa. Tarefa não encontrada!"})
        }
        await todo.destroy()
        res.status(200).json({ message: "Tarefa deletada!"})
    } catch (error) {
        console.error('Erro ao deletar tarefa:', error)
        res.status(500).json({ error: "Erro interno no servidor" })
    }
}