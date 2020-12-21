module.exports = app => {
    const controller = app.controllers.registroAluno

    app.route('/api/v1/registroAluno')
        .get(controller.listRegistroAluno)
        .post(controller.saveRegistroAluno)

}