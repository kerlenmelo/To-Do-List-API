const express = require('express') // importa o Express
const app = express();
const port = 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json())

// Rota inicial
app.get('/', (req, res) => {
    res.send('API To-Do List está rodando!')
})

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`)
})