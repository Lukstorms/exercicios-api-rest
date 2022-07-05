const express = require('express')
const alunos = require('./controladores/recurso-a')

const rotas = express();

rotas.get('/alunos', alunos.listarAlunos);
rotas.get('/alunos/:id', alunos.obterAluno);

rotas.post('/alunos', alunos.cadastrarAluno);

rotas.delete('/alunos/:id', alunos.excluirAluno);

module.exports = rotas