const db = require("../config/databases");

exports.Parametro = {
    
    //Cria Pedido
    async cadastroLoja(req, res) {

       //"CREATE TABLE parametro (cod_parametro serial not null, imagem_loja character(60), titulo_loja character(45), descricao_loja character(50), contato_loja character(14), endereco_loja character(60), pedido_minimo_loja real, horario_funcionamento_loja character(20), dias_funcionamento_loja character(50));";
        
        const pedido = "INSERT INTO parametro (cod_entidade, valor_total, desconto, valor_liquido, situacao) values ('"+req.body.cod_entidade+"', '"+req.body.valor_total+"', '"+req.body.desconto+"', '"+req.body.valor_liquido+"', '"+req.body.situacao+"');"
        db.query(pedido);

        return res.json('Pedido criado com sucesso!');

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

        const pedido = "SELECT * FROM pedido WHERE cod_entidade="+req.params.cod+" ORDER BY data_criacao DESC"
        const ped = await db.query(pedido);

        return res.json(ped.rows);

    }

};
