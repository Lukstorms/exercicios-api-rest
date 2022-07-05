const express = require('express');
const convidados = require('./controladores/controladores')

const rotas = express();

rotas.get('/convidados', convidados.listaDeConvidados);
rotas.post('/convidados', convidados.adicionarCovidado);
rotas.delete('/convidados/:indesejado', convidados.removerConvidado);


module.exports = rotas