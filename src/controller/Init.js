const db = require("../config/databases");

exports.Init = {

    //Cria todas as tebelas do sistema
    async createTables(req, res) {

        const entidade     = "CREATE TABLE entidade (cod_entidade serial not null, nome character(50), contato character(14), email character(30), senha character(30), situacao integer, tipo integer);";
        const entidade_end = "CREATE TABLE entidade_end (cod_endereco serial not null, cod_entidade integer, endereco character(50), numero integer, complemento character(30), bairro character(50), cep character(9), cidade character(40), estado character(2));"
        const pedido       = "CREATE TABLE pedido (cod_pedido serial not null, cod_entidade integer, valor_total character(50), desconto character(50), valor_liquido character(50), observacao character(100), data_criacao timestamp not null default current_timestamp, situacao integer);"
        const pedido_item  = "CREATE TABLE pedido_item (cod_pedido_item serial not null, cod_pedido integer, cod_produto integer, preco character(50), desconto character(50), quantidade integer, valor_total character(50), valor_liquido character(50));"
        const produto      = "CREATE TABLE produto (cod_produto serial not null, imagem character(60), titulo character(80), descricao character(100), preco real(), desconto character(50), situacao integer);"

        db.query(entidade);     //Cria tabela entidade
        db.query(entidade_end); //Cria tabela entidade_end
        db.query(pedido);       //Cria tabela pedido
        db.query(pedido_item);  //Cria tabela pedido_item
        db.query(produto);      //Cria tabela produto

        return res.json('Tabelas criadas com sucesso!');
    },
    //Deleta todas as tebelas do sistema
    async dropTables(req, res) {
        db.query(
            "DROP TABLE entidade, entidade_end, pedido, pedido_item, produto;" //Deleta todas as tabelas da base de dados
        );

        return res.json('Tabelas excluidas com sucesso!');
    }
  
};