const db = require("../config/databases");

exports.Init = {

    //Cria todas as tebelas do sistema
    async createTables(req, res) {

        const parametro    = "CREATE TABLE parametro (cod_parametro serial not null, imagem_loja character(60), titulo_loja character(45), descricao_loja character(50), contato_loja character(14), endereco_loja character(60), numero_loja character(4), complemento_loja character(20), cep_loja character(9), pedido_minimo_loja real, horario_ini_funcionamento_loja time, horario_fim_funcionamento_loja time, funcionamento_semana_seg int, funcionamento_semana_ter int, funcionamento_semana_qua int, funcionamento_semana_qui int, funcionamento_semana_sex int, funcionamento_semana_sab int, funcionamento_semana_dom int)";
        const entidade     = "CREATE TABLE entidade (cod_entidade serial not null, nome character(50), contato character(14), email character(30), senha character(30), situacao integer, tipo integer)";
        const entidade_end = "CREATE TABLE entidade_end (cod_endereco serial not null, cod_entidade integer, endereco character(50), numero integer, complemento character(30), bairro character(50), cep character(9), cidade character(40), estado character(2))"
        const pedido       = "CREATE TABLE pedido (cod_pedido serial not null, cod_entidade integer, valor_total real, desconto real, valor_liquido real, data_criacao timestamp not null default current_timestamp, situacao integer)"
        const pedido_item  = "CREATE TABLE pedido_item (cod_pedido_item serial not null, cod_pedido integer, cod_produto integer, preco real, desconto real, quantidade integer, valor_total real, valor_liquido real, observacao character(100))"
        const produto      = "CREATE TABLE produto (cod_produto serial not null, imagem character(60), titulo character(80), descricao character(100), preco real, desconto real, situacao integer)"

        db.query(parametro);    //Cria tabela parametros
        //db.query(entidade);     //Cria tabela entidade
        //db.query(entidade_end); //Cria tabela entidade_end
        //db.query(pedido);       //Cria tabela pedido
        //db.query(pedido_item);  //Cria tabela pedido_item
        //db.query(produto);      //Cria tabela produto

        return res.json('Tabelas criadas com sucesso!');
    },
    //Deleta todas as tebelas do sistema
    async dropTables(req, res) {
        
        const drop = "DROP TABLE parametro, entidade, entidade_end, pedido, pedido_item, produto;" 
        db.query(drop);

        return res.json('Tabelas excluidas com sucesso!');
    }
  
};