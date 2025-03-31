const express = require('express')
const app = express()
const todoRoutes = require('./routes/todoRoutes')

// Permitir JSON no body
app.use(express.json())

// Rotas
app.use('/todos', todoRoutes)

// Rota principal de teste
app.get('/', (req, res) => {
  res.send('API ToDoList Profissional 🌟')
});

module.exports = app
