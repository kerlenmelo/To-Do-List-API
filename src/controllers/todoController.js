const Todo = require('../models/Todo');
const { validationResult } = require('express-validator');

// Buscar todas as tarefas
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll({ where: { userId: req.user.id } })
        
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
        res.status(200).json(req.todo)

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
        const userId = req.user.id
        const novoTodo = await Todo.create({ title, userId })

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
        const { title, completed } = req.body
        
        if(title === undefined && completed === undefined) {
            return res.status(400).json({
                error: 'Você precisa enviar pelo menos "title" ou "completed" para atualizar a tarefa.'
            })
        }
        
        // Atualiza tarefa no banco
        await req.todo.update({ 
            ...(title !== undefined && { title }), 
            ...(completed !== undefined && { completed })
        })

        res.status(200).json(req.todo)
        
    } catch (error) {
        console.error('Erro ao atualizar tarefa:', error)
        res.status(500).json({ error: "Erro interno no servidor" })
    }
}

// Deletar uma tarefa
exports.deleteTodo = async (req, res) => {
    try {
        await req.todo.destroy()
        res.status(200).json({ message: "Tarefa deletada!"})
    } catch (error) {
        console.error('Erro ao deletar tarefa:', error)
        res.status(500).json({ error: "Erro interno no servidor" })
    }
}