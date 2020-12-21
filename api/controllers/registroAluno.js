const uuidv4 = require('uuid/v4')

module.exports = app => {
    const registroAlunoDB = app.data.registroAluno
    const controller = {}


    const {
        registroAluno: registroAlunoMock,
    } = registroAlunoDB

    controller.listRegistroAluno = (req, res) => res.status(200).json(registroAlunoDB)
    
    controller.saveRegistroAluno = (req, res) => {
        registroAlunoMock.data.push({
            id: uuidv4(),
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email
        })
        res.status(201).json(registroAlunoMock)
    }

    return controller
}