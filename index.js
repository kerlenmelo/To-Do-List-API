require('dotenv').config()
const app = require('./src/app')
const sequelize = require('./src/database/database')
require('./src/models/Todo')
require('./src/models/User')

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        // Testar conexão com o BD
        await sequelize.authenticate()
        console.log('Conexão com o banco de dados estabelecida com sucesso!')

        app.listen(PORT, () => {
            console.log(`Servidor executando em http://localhost:${PORT}`);
        });

    } catch (e) {
        console.error('Erro ao iniciar o servidor:', e)
    }
}

startServer();
