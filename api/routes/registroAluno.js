module.exports = app => {
    const controller = require('../controllers/registroAluno')()

    app.route('/api/v1/registroAluno')
        .get(controller.listRegistroAluno)

}