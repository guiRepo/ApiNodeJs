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

    controller.removeRegistroAluno = (req, res) => {
        const {
            alunoId, 
        } = req.params


        const foundAlunoIndex = registroAlunoMock.data.findIndex(aluno => aluno.id === alunoId)

        if(foundAlunoIndex === -1) {
            res.status(404).json({
                message: 'Aluno nao encontrado na base.',
                success: false,
                registroAluno: registroAlunoMock
            })
        } else {
            registroAlunoMock.data.splice(foundAlunoIndex, 1)
            res.status(200).json({
                message: 'Aluno encontrado e deletado da base.',
                success: true,
                registroAluno: registroAlunoMock
            })
        }
    }

    return controller
}