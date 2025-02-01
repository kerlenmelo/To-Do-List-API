# 📌 To-Do List API

## 📜 Sobre o Projeto
Esta API foi desenvolvida para gerenciar tarefas de uma **To-Do List**, permitindo criar, listar, atualizar e excluir tarefas.

## 🚀 Tecnologias Utilizadas
- **Node.js** - Plataforma de desenvolvimento
- **Express.js** - Framework para criação de APIs
- **Sequelize** - ORM para manipulação do banco de dados
- **SQLite** - Banco de dados leve e eficiente
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📂 Estrutura do Projeto
```
📦 To-Do List API
├── 📂 controllers  # Contém a lógica das requisições (CRUD)
│   ├── todoController.js
├── 📂 routes  # Define as rotas da API
│   ├── todoRoutes.js
├── 📂 models  # Define a estrutura da tabela no banco
│   ├── Todo.js
├── 📂 database  # Configuração do banco de dados
│   ├── database.js
├── server.js  # Arquivo principal da aplicação
└── package.json  # Configurações do projeto
```

## 🔧 Como Rodar o Projeto
### 1️⃣ Clonar o Repositório
```sh
git clone https://github.com/kerlenmelo/To-Do-List-API.git
cd To-Do-List-API
```
### 2️⃣ Instalar as Dependências
```sh
npm install
```
### 3️⃣ Rodar o Servidor
```sh
npm start
```
A API estará disponível em: **http://localhost:3000**

## 📌 Endpoints da API
### 🔹 Criar uma nova tarefa
**POST /todos**
```json
{
  "title": "Minha nova tarefa"
}
```
### 🔹 Listar todas as tarefas
**GET /todos**
### 🔹 Buscar uma tarefa pelo ID
**GET /todos/:id**
### 🔹 Atualizar uma tarefa
**PUT /todos/:id**
```json
{
  "title": "Tarefa Atualizada",
  "completed": true
}
```
### 🔹 Excluir uma tarefa
**DELETE /todos/:id**

## 📞 Contato
Se tiver dúvidas ou sugestões, entre em contato:
- **GitHub**: [kerlenmelo](https://github.com/kerlenmelo)
- **LinkedIn**: [kerlenmelo](https://www.linkedin.com/in/kerlenmelo/)

