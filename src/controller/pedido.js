const db = require('../config/databases');

exports.Pedido = {
    
    //Cria Pedido
    async criarPedido(req, res) {

        const pedido = "INSERT INTO pedido (cod_entidade, valor_total, desconto, valor_liquido, troco, cod_parametro_forma_pagamento, retirada_local, situacao) values ('"+req.body.cod_entidade+"', '"+req.body.valor_total+"', '"+req.body.desconto+"', '"+req.body.valor_liquido+"', '"+req.body.troco+"', '"+req.body.cod_parametro_forma_pagamento+"', '"+req.body.retirada_local+"', '"+req.body.situacao+"'); SELECT currval(pg_get_serial_sequence('pedido','cod_pedido'));"
        const ret = await db.query(pedido);

        return res.json(ret);

    },
    //Edita Pedido
    async editarPedido(req, res) {
        
        //Criando validação de campos que foram alterados na view e que devem ser alterados na base de dados
        const pedido = "SELECT * FROM pedido WHERE cod_pedido="+req.params.cod+";"
        const ped = await db.query(pedido);
    
        //Situacao 
        if(ped.rows[0].situacao !== req.body.situacao) {
            db.query("UPDATE pedido SET situacao = '"+req.body.situacao+"' WHERE cod_pedido = "+req.params.cod+";");
        }

        return res.json('Situação do pedido atualizado com sucesso!');

    },
    //Retorna um Pedido Especifico
    async pedido(req, res) {

        const pedido = "SELECT * FROM pedido WHERE cod_pedido="+req.params.cod+";"
        const ped = await db.query(pedido);

        return res.json(ped.rows);

    },
    //Retorna todos os Pedidos
    async pedidos(req, res) {

        const pedido = "SELECT * FROM pedido ORDER BY data_criacao DESC"
        const ped = await db.query(pedido);

        return res.json(ped.rows);

    },
    //Retorna Todos os Pedidos de um Cliente Especifico
    async pedidosEntidade(req, res) {

        const pedido = "SELECT ped.cod_pedido, ped.valor_total, TO_CHAR(ped.data_criacao, 'DD/MM/YYYY') AS data_criacao, pfp.descricao AS forma_pagamento, CASE ped.situacao WHEN 0 THEN 'Pendente' WHEN 1 THEN 'Em andamento' WHEN 2 THEN 'Concluido' END AS situacao FROM pedido ped INNER JOIN parametro_forma_pagamento pfp ON pfp.cod_parametro_forma_pagamento = ped.cod_parametro_forma_pagamento WHERE cod_entidade="+req.params.cod+" ORDER BY data_criacao DESC"
        const ped = await db.query(pedido);

        return res.json(ped.rows);

    }

};
