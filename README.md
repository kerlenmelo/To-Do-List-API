# 📌 To-Do List API

## 📜 Sobre o Projeto
Esta é uma API RESTful desenvolvida com foco em boas práticas de desenvolvimento backend. A aplicação permite que **usuários autenticados** possam criar, visualizar, atualizar e deletar suas tarefas de forma segura e organizada.

## 🚀 Tecnologias Utilizadas
- **Node.js** – Plataforma principal do backend
- **Express.js** – Framework para criação de APIs RESTful
- **Sequelize** – ORM para abstração e controle do banco de dados
- **SQLite** – Banco de dados leve e ideal para desenvolvimento local
- **JWT (JSON Web Token)** – Autenticação segura de usuários
- **Express-validator** – Validação de dados de entrada

## 🔐 Funcionalidades
- Registro e login de usuários com senha criptografada (bcrypt)
- Autenticação com JWT
- Middleware para proteger rotas
- CRUD completo de tarefas, restrito ao usuário autenticado
- Validação de entrada com mensagens claras de erro
- Controle de acesso a tarefas (usuário só acessa o que é dele)
- Migrations com Sequelize CLI (sem uso de `.sync()`)

## 📂 Estrutura do Projeto
```
📦 To-Do List API
├── src/
│   ├── config/          # Configurações de ambiente e Sequelize
│   ├── controllers/     # Lógica das requisições (auth, todo)
│   ├── database/        # Conexão com SQLite
│   ├── middlewares/     # Middlewares de autenticação, validação e erro
│   ├── migrations/      # Histórico de estrutura do banco
│   ├── models/          # Modelos Sequelize (User, Todo)
│   └── routes/          # Rotas protegidas e públicas
├── .env                 # Variáveis de ambiente (JWT, banco, porta)
├── .sequelizerc         # Caminhos customizados do Sequelize CLI
├── index.js             # Inicialização da aplicação
```

## 📦 Instalação e Execução
```bash
# 1. Clonar o repositório
git clone https://github.com/kerlenmelo/To-Do-List-API.git
cd To-Do-List-API

# 2. Instalar dependências
npm install

# 3. Rodar migrations para criar o banco
npm run migrate

# 4. Iniciar o servidor
npm run dev
```

## 📌 Endpoints da API

### 🔐 Autenticação
- **POST /auth/register** – Registro de novo usuário
- **POST /auth/login** – Login e retorno do token JWT

### 📝 Tarefas (requer token)
- **GET /todos** – Listar todas as tarefas do usuário
- **GET /todos/:id** – Buscar uma tarefa específica
- **POST /todos** – Criar nova tarefa
- **PUT /todos/:id** – Atualizar tarefa
- **DELETE /todos/:id** – Deletar tarefa

## 📎 Exemplo de requisição com token
```http
Authorization: Bearer seu_token_aqui
```

## 📞 Contato
- GitHub: [kerlenmelo](https://github.com/kerlenmelo)
- LinkedIn: [kerlenmelo](https://www.linkedin.com/in/kerlenmelo/)
