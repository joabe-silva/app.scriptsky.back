const express = require('express');
const routes = express.Router();

const Init = require('../src/controller/Init');
const entidadeController = require('./controller/entidadeController');

//Cria todas as tabelas do banco de dados
routes.post('/init-create-tables', Init.Init.createTables)
//Deleta todas as tabelas do banco de dados
routes.post('/init-drop-tables', Init.Init.dropTables)
//Rotas comuns
routes.post('/cadastro-funcionario', entidadeController.entidadeController.cadastroEntidadeFuncionario)
routes.get('/lista-entidades', entidadeController.entidadeController.listaEntidades)

/*
routes.get('/item/:id', ItemController.item);
routes.get('/itens', ItemController.itens);
routes.post('/cadastro', ItemController.cadastro);
routes.put('/edita/:id', ItemController.edita);
routes.delete('/exclui/:id', ItemController.exclui)
*/

module.exports = routes;

