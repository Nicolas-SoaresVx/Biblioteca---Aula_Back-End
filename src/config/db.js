const knex = require('knex')({

    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'biblioteca'
    }
})

module.exports = knex