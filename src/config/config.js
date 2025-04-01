require('dotenv').config()

module.exports = {
    development: {
        dialect: 'sqlite',
        storage: 'src/database/database.sqlite'
    },
    test: {
        dialect: 'sqlite',
        storage: ':memory:'
    },
    production: {
        dialect: 'sqlite',
        storage: 'src/database/database.sqlite'
    }
}
