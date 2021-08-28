const db = require('../config/databases');

exports.Init = {

    //Cria todas as tebelas do sistema
    async createTables(req, res) {

        //const blacklist                 = "CREATE TABLE blacklist (cod_blacklist serial not null, token character(200))"
        //const parametro                 = "CREATE TABLE parametro (cod_parametro serial not null, imagem_01_loja character(60), imagem_02_loja character(60), titulo_loja character(45), descricao_loja character(50), contato_loja character(14), endereco_loja character(60), numero_loja character(4), complemento_loja character(20), cep_loja character(9), pedido_minimo_loja real, frete real, horario_ini_funcionamento_loja time, horario_fim_funcionamento_loja time, funcionamento_semana_seg int, funcionamento_semana_ter int, funcionamento_semana_qua int, funcionamento_semana_qui int, funcionamento_semana_sex int, funcionamento_semana_sab int, funcionamento_semana_dom int, url_storage character(100), url_complet character(50))"
        //const parametro_forma_pagamento = "CREATE TABLE parametro_forma_pagamento (cod_parametro_forma_pagamento serial not null, descricao character(200), status integer)"
        //const entidade                  = "CREATE TABLE entidade (cod_entidade serial not null, nome character(50), contato character(14), email character(30), senha character(100), situacao integer, tipo integer)"
        //const entidade_end              = "CREATE TABLE entidade_end (cod_endereco serial not null, cod_entidade integer, endereco character(50), numero integer, complemento character(30), bairro character(50), cep character(9), cidade character(40), estado character(2))"
        //const pedido                    = "CREATE TABLE pedido (cod_pedido serial not null, cod_entidade integer, valor_total real, desconto real, valor_liquido real, troco real, data_criacao timestamp not null default current_timestamp, cod_parametro_forma_pagamento integer, retirada_local boolean, observacao character(30), situacao integer)"
        //const pedido_item               = "CREATE TABLE pedido_item (cod_pedido_item serial not null, cod_pedido integer, cod_produto integer, preco real, desconto real, quantidade integer, valor_total real, valor_liquido real, observacao character(100))"
        //const produto                   = "CREATE TABLE produto (cod_produto serial not null, cod_produto_grupo integer, imagem character(60), titulo character(80), descricao character(100), preco real, desconto real, situacao integer)"
        //const produto_grupo             = "CREATE TABLE produto_grupo (cod_produto_grupo serial not null, sequencia integer, imagem character(60), titulo character(80), descricao character(80), situacao integer)"

        //const ins_entidade                = "INSERT INTO entidade (nome, contato, email, senha, situacao, tipo) VALUES ('Joabe Silva', '(85)99999-9999', '@joabe', '$2b$08$zitWUGossowdwWLczmD7DOGKbL0nF2Wx54HillIMtv4lGaaylYZvC ', 0, 0)" //Senha 123
        //const ins_entidade_end            = "INSERT INTO entidade_end (cod_entidade, endereco, numero, complemento, bairro, cep, cidade, estado) VALUES (1, 'Rua Santa Elisa', '430', '', 'Pirambu', '60311-020', 'Fortaleza', 'CE')"
        //const ins_parametro               = "INSERT INTO parametro (imagem_01_loja, imagem_02_loja, titulo_loja, descricao_loja, contato_loja, endereco_loja, numero_loja, complemento_loja, cep_loja, pedido_minimo_loja, frete, horario_ini_funcionamento_loja, horario_fim_funcionamento_loja, funcionamento_semana_seg, funcionamento_semana_ter, funcionamento_semana_qua, funcionamento_semana_qui, funcionamento_semana_sex, funcionamento_semana_sab, funcionamento_semana_dom, url_storage, url_complet) VALUES ('img_back.jpg', 'img_front.jpg', 'O Boleiro', '', '(85)99999-9999', 'Rua Santa Elisa', '430', '', '60311-020', 10.00, 3.00, '18:00:00', '23:59:00', 1, 1, 1, 1, 1, 1, 0, 'https://firebasestorage.googleapis.com/v0/b/app-scriptsky-com-br.appspot.com/o/', '?alt=media')"
        //const ins_param_forma_pagamento   = "INSERT INTO parametro_forma_pagamento (descricao, status) VALUES ('A Vista', 0)"

        //db.query(blacklist);                 //Cria tabela blacklist
        //db.query(parametro);                 //Cria tabela parametro
        //db.query(parametro_forma_pagamento); //Cria tabela parametro_forma_pagamento
        //db.query(entidade);                  //Cria tabela entidade
        //db.query(entidade_end);              //Cria tabela entidade_end
        //db.query(pedido);                    //Cria tabela pedido
        //db.query(pedido_item);               //Cria tabela pedido_item
        //db.query(produto);                   //Cria tabela produto
        //db.query(produto_grupo);             //Cria tabela produto_grupo

        //db.query(ins_entidade);                 //Realizando insert na tabela entidade
        //db.query(ins_entidade_end);             //Realizando insert na tabela entidade_end
        //db.query(ins_parametro);                //Realizando insert na tabela parametro
        //db.query(ins_param_forma_pagamento);    //Realizando insert na tabela parametro_forma_pagamento

        return res.json('Tabelas criadas com sucesso!');

    },
    //Deleta todas as tebelas do sistema
    async dropTables(req, res) {
        
        const drop = "DROP TABLES;" 
        db.query(drop);

        return res.json('Tabelas excluidas com sucesso!');
        
    }
  
};