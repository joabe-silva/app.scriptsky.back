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
routes.put('/editar-produto/:cod', produtoController.Produto.editarProduto)
routes.get('/produto/:cod', produtoController.Produto.produto)
routes.get('/produtos', produtoController.Produto.produtos)

module.exports = routes;

