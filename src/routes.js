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
routes.post('/logoff', login.Login.logoff)


//Rotas Parametro
routes.post('/cadastro-parametro', login.Login.verificaJWT, parametro.Parametro.cadastroParametro)
routes.put('/editar-parametro', login.Login.verificaJWT, parametro.Parametro.editarParametro)
routes.get('/parametro', login.Login.verificaJWT, parametro.Parametro.parametro)

//Rotas Entidade
routes.post('/cadastro-entidade-cliente', entidade.Entidade.cadastroEntidadeCliente)
routes.post('/cadastro-entidade-funcionario', login.Login.verificaJWT, entidade.Entidade.cadastroEntidadeFuncionario)
routes.put('/editar-entidade/:cod', login.Login.verificaJWT, entidade.Entidade.editarEntidade)
routes.get('/entidade/:cod', login.Login.verificaJWT, entidade.Entidade.entidade)
routes.get('/entidades', login.Login.verificaJWT, entidade.Entidade.entidades)

//Rotas Endereco Entidade
routes.post('/cadastro-endereco-entidade', login.Login.verificaJWT, entidadeEndereco.EnderecoEntidade.cadastroEnderecoEntidade)
routes.put('/editar-endereco-entidade/:cod', login.Login.verificaJWT, entidadeEndereco.EnderecoEntidade.editarEnderecoEntidade)
routes.get('/endereco-entidade/:cod', login.Login.verificaJWT, entidadeEndereco.EnderecoEntidade.enderecoEntidade)

//Rotas Pedido
routes.post('/criar-pedido', login.Login.verificaJWT, pedido.Pedido.criarPedido)
routes.put('/editar-pedido/:cod', login.Login.verificaJWT, pedido.Pedido.editarPedido)
routes.get('/pedido/:cod', login.Login.verificaJWT, pedido.Pedido.pedido)
routes.get('/pedidos', login.Login.verificaJWT, pedido.Pedido.pedidos)
routes.get('/pedidos-entidade/:cod', login.Login.verificaJWT, pedido.Pedido.pedidosEntidade)

//Rotas Pedido Item
routes.post('/criar-pedido-item', login.Login.verificaJWT, pedidoItem.PedidoItem.criarPedidoItem)
routes.get('/pedido-itens/:cod', login.Login.verificaJWT, pedidoItem.PedidoItem.pedidoItens)

//Rotas Produto
routes.post('/cadastro-produto', login.Login.verificaJWT, produto.Produto.cadastroProduto)
routes.put('/editar-produto/:cod', login.Login.verificaJWT, produto.Produto.editarProduto)
routes.get('/produto/:cod', produto.Produto.produto)
routes.get('/produtos', produto.Produto.produtos)

//Rotas Produto Grupo
routes.post('/cadastro-produto-grupo', login.Login.verificaJWT, produtoGrupo.Grupo.cadastroProdutoGrupo)
routes.put('/editar-produto-grupo/:cod', login.Login.verificaJWT, produtoGrupo.Grupo.editarProdutoGrupo)
routes.get('/grupo/:cod', produtoGrupo.Grupo.grupo)
routes.get('/grupos', produtoGrupo.Grupo.grupos)

module.exports = routes;

