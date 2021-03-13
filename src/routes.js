const express = require('express');
const routes = express.Router();

const login            = require('./controller/login');
const init             = require('./controller/init');
const parametro        = require('./controller/parametro');
const entidade         = require('./controller/entidade');
const entidadeEndereco = require('./controller/entidadeEndereco');
const pedido           = require('./controller/pedido');
const pedidoItem       = require('./controller/pedidoItem');
const produto          = require('./controller/produto');
const produtoGrupo     = require('./controller/produtoGrupo');

//Cria todas as tabelas do banco de dados
routes.post('/init-create-tables', init.Init.createTables)
//Deleta todas as tabelas do banco de dados
routes.post('/init-drop-tables', init.Init.dropTables)

//Login
routes.post('/login', login.Login.login)

//Rotas Parametro
routes.post('/cadastro-parametro', login.Login.verificaJWT, parametro.Parametro.cadastroParametro)
routes.put('/editar-parametro', parametro.Parametro.editarParametro)

//Rotas Entidade
routes.post('/cadastro-entidade', entidade.Entidade.cadastroEntidade)
routes.put('/editar-entidade/:cod', entidade.Entidade.editarEntidade)
routes.get('/entidade/:cod', entidade.Entidade.entidade)
routes.get('/entidades', entidade.Entidade.entidades)

//Rotas Endereco Entidade
routes.post('/cadastro-endereco-entidade', entidadeEndereco.EnderecoEntidade.cadastroEnderecoEntidade)
routes.put('/editar-endereco-entidade/:cod', entidadeEndereco.EnderecoEntidade.editarEnderecoEntidade)
routes.get('/endereco-entidade/:cod', entidadeEndereco.EnderecoEntidade.enderecoEntidade)

//Rotas Pedido
routes.post('/criar-pedido', pedido.Pedido.criarPedido)
routes.put('/editar-pedido/:cod', pedido.Pedido.editarPedido)
routes.get('/pedido/:cod', pedido.Pedido.pedido)
routes.get('/pedidos', pedido.Pedido.pedidos)
routes.get('/pedidos-entidade/:cod', pedido.Pedido.pedidosEntidade)

//Rotas Pedido Item
routes.post('/criar-pedido-item', pedidoItem.PedidoItem.criarPedidoItem)
routes.get('/pedido-itens/:cod', pedidoItem.PedidoItem.pedidoItens)

//Rotas Produto
routes.post('/cadastro-produto', produto.Produto.cadastroProduto)
routes.put('/editar-produto/:cod', produto.Produto.editarProduto)
routes.get('/produto/:cod', produto.Produto.produto)
routes.get('/produtos', produto.Produto.produtos)

//Rotas Produto Grupo
routes.post('/cadastro-produto-grupo', produtoGrupo.Grupo.cadastroProdutoGrupo)
routes.put('/editar-produto-grupo/:cod', produtoGrupo.Grupo.editarProdutoGrupo)
routes.get('/grupo/:cod', produtoGrupo.Grupo.grupo)
routes.get('/grupos', produtoGrupo.Grupo.grupos)

module.exports = routes;

