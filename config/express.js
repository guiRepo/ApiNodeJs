const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')

module.exports = () => {
    const app = express()

    // Variaveis da Aplicação
    app.set('port', process.env.PORT || config.get('server.port'))

    // Rotas
    require('../api/routes/registroAluno')(app)

    // Middleware
    app.use(bodyParser.json())

    return app

    }