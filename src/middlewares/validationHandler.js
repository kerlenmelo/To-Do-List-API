const { validationResult } = require('express-validator')

module.exports = (req, res, next) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        const formattedErros = errors.array().map(error => ({
            field: error.param,
            message: error.msg
        }))

        return res.status(400).json({ errors: formattedErros })
    }

    next()
}