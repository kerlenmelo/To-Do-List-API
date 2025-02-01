const express = require('express') // importa o Express
const app = express();
const port = 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json())

// Importa as rotas que serão utilizadas
const todoRoutes = require('./routes/todoRoutes.js')
app.use(todoRoutes)

// Rota inicial (teste)
app.get('/', (req, res) => {
    res.send('API To-Do List está rodando!')
})

// Conexão com o banco de dados
const sequelize = require('./database/database'); // Importa a conexão do banco

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });
;

// Modelo do Todo
const Todo = require('./models/Todo'); // Importa o modelo Todo

// Sincroniza o banco de dados e cria a tabela se ela não existir
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Banco de dados sincronizado com sucesso!');
    })
    .catch(err => {
        console.error('Erro ao sincronizar banco de dados:', err);
    });
;

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`)
})