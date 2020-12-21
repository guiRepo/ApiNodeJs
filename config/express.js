const express    = require('express')
const bodyParser = require('body-parser')
const config     = require('config')
const consign     = require('consign')

module.exports = () => {
    const app = express()

    // Variaveis da Aplicação
    app.set('port', process.env.PORT || config.get('server.port'))

    // Middleware
    app.use(bodyParser.json())

    consign({cwd: 'api'})
        .then('data')
        .then('controllers')
        .then('routes')
        .into(app)

    return app

    }