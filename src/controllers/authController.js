const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Cadastrar usuário
exports.register = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const existingUser = await User.findOne({ where: { email } })
        if (existingUser) {
            return res.status(400).json({ error: 'E-mail já cadastrado.' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            message: 'Usuário criado com sucesso!',
            userId: newUser.id
        })
    } catch (error) {
        console.error('Erro ao registrar usuário:', error)
        res.status(500).json({ error: 'Erro interno ao cadastrar usuário.' })
    }
}

// Login usuário
exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ where: { email } })
        if(!user) {
            return res.status(400).json({ error: 'Credenciais inválidas' })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) {
            return res.status(400).json({ error: 'Credenciais inválidas' })
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        res.status(200).json({ token })
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ error: 'Erro interno ao fazer login.' });
    }
}