const express = require('express');
const routes = express.Router();

const login                      = require('./controller/login');
const init                       = require('./controller/init');
const parametroController        = require('./controller/parametroController');
const entidadeController         = require('./controller/entidadeController');
const entidadeEnderecoController = require('./controller/entidadeEnderecoController');
const pedidoController           = require('./controller/pedidoController');
const pedidoItemController       = require('./controller/pedidoItemController');
const produtoController          = require('./controller/produtoController');
const produtoGrupoController     = require('./controller/produtoGrupoController');

//Cria todas as tabelas do banco de dados
routes.post('/init-create-tables', init.Init.createTables)
//Deleta todas as tabelas do banco de dados
routes.post('/init-drop-tables', init.Init.dropTables)

//Login
routes.post('/login', login.Login.login)

//Rotas Parametro
routes.post('/cadastro-parametro', parametroController.Parametro.cadastroParametro)
routes.put('/editar-parametro', parametroController.Parametro.editarParametro)

//Rotas Entidade
routes.post('/cadastro-entidade', entidadeController.Entidade.cadastroEntidade)
routes.put('/editar-entidade/:cod', entidadeController.Entidade.editarEntidade)
routes.get('/entidade/:cod', entidadeController.Entidade.entidade)
routes.get('/entidades', entidadeController.Entidade.entidades)

//Rotas Endereco Entidade
routes.post('/cadastro-endereco-entidade', entidadeEnderecoController.EnderecoEntidade.cadastroEnderecoEntidade)
routes.put('/editar-endereco-entidade/:cod', entidadeEnderecoController.EnderecoEntidade.editarEnderecoEntidade)
routes.get('/endereco-entidade/:cod', entidadeEnderecoController.EnderecoEntidade.enderecoEntidade)

//Rotas Pedido
routes.post('/criar-pedido', pedidoController.Pedido.criarPedido)
routes.put('/editar-pedido/:cod', pedidoController.Pedido.editarPedido)
routes.get('/pedido/:cod', pedidoController.Pedido.pedido)
routes.get('/pedidos', pedidoController.Pedido.pedidos)
routes.get('/pedidos-entidade/:cod', pedidoController.Pedido.pedidosEntidade)

//Rotas Pedido Item
routes.post('/criar-pedido-item', pedidoItemController.PedidoItem.criarPedidoItem)
routes.get('/pedido-itens/:cod', pedidoItemController.PedidoItem.pedidoItens)

//Rotas Produto
routes.post('/cadastro-produto', produtoController.Produto.cadastroProduto)
routes.put('/editar-produto/:cod', produtoController.Produto.editarProduto)
routes.get('/produto/:cod', produtoController.Produto.produto)
routes.get('/produtos', produtoController.Produto.produtos)

//Rotas Produto Grupo
routes.post('/cadastro-produto-grupo', produtoGrupoController.Grupo.cadastroProdutoGrupo)
routes.put('/editar-produto-grupo/:cod', produtoGrupoController.Grupo.editarProdutoGrupo)
routes.get('/grupo/:cod', produtoGrupoController.Grupo.grupo)
routes.get('/grupos', produtoGrupoController.Grupo.grupos)

module.exports = routes;

