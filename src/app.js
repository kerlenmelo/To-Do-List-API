const express = require('express')
const app = express()
const todoRoutes = require('./routes/todoRoutes')
const authRoutes = require('./routes/authRoutes')
const errorHandler = require('./middlewares/errorHandler')

// Permitir JSON no body
app.use(express.json())

// Rotas
app.use('/todos', todoRoutes)
app.use('/auth', authRoutes)

// Rota principal de teste
app.get('/', (req, res) => {
    res.send('API ToDoList Profissional 🌟')
});

// Middleware para rotas inexistestes
app.use((req, res, next) => {
    const error = new Error(`Rota não encontrada: ${req.originalUrl}`);
    error.status = 404;
    next(error);
})

app.use(errorHandler)

module.exports = app
