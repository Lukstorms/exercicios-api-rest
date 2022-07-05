const express = require('express');
const livros = require('./controladores/controladores')

const rotas = express();

rotas.get('/livros', livros.consultaColecao);
rotas.get('/livros/:id', livros.consultaPorId);
rotas.post('/livros', livros.adicionarLivro);
rotas.put('/livros/:id', livros.substituindoLivro);
rotas.patch('/livros/:id', livros.alterandoLivro);
rotas.delete('/livros/:id', livros.removerLivro);

module.exports = rotas