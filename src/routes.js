const express = require('express');
const routes = express.Router();

const init = require('../src/controller/Init');
const entidadeController = require('./controller/entidadeController');
const produtoController = require('./controller/produtoController');

//Cria todas as tabelas do banco de dados
routes.post('/init-create-tables', init.Init.createTables)
//Deleta todas as tabelas do banco de dados
routes.post('/init-drop-tables', init.Init.dropTables)

//Rotas entidade
routes.post('/cadastro-entidade', entidadeController.Entidade.cadastroEntidade)
routes.put('/editar-entidade/:cod', entidadeController.Entidade.editarEntidade)
routes.get('/entidade/:cod', entidadeController.Entidade.entidade)
routes.get('/entidades', entidadeController.Entidade.entidades)

//Rotas Produto
routes.post('/cadastro-produto', produtoController.Produto.cadastroProduto)
routes.put('/editar-entidade/:cod', entidadeController.entidadeController.editarEntidade)
routes.get('/entidade/:cod', entidadeController.entidadeController.entidade)
routes.get('/entidades', entidadeController.entidadeController.entidades)

module.exports = routes;

