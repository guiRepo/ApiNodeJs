module.exports = () => {
    const registroAlunoDB = require('../data/registroAluno.json')
    const controller = {}


    controller.listRegistroAluno = (req, res) => res.status(200).json(registroAlunoDB)

    return controller
}