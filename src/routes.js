const express = require('express');
const routes = express.Router();

const init = require('../src/controller/Init');
const entidadeController = require('./controller/entidadeController');

//Cria todas as tabelas do banco de dados
routes.post('/init-create-tables', init.Init.createTables)
//Deleta todas as tabelas do banco de dados
routes.post('/init-drop-tables', init.Init.dropTables)
//Rotas comuns
routes.post('/cadastro-entidade', entidadeController.entidadeController.cadastroEntidade)
routes.put('/editar-entidade/:cod', entidadeController.entidadeController.editarEntidade)
routes.get('/entidade/:cod', entidadeController.entidadeController.entidade)
routes.get('/entidades', entidadeController.entidadeController.entidades)

/*
routes.get('/item/:id', ItemController.item);
routes.get('/itens', ItemController.itens);
routes.post('/cadastro', ItemController.cadastro);
routes.put('/edita/:id', ItemController.edita);
routes.delete('/exclui/:id', ItemController.exclui)
*/

module.exports = routes;

