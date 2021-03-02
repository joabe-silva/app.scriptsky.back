const db = require("../config/databases");

exports.PedidoItem = {
    
    //Cria Pedido
    async criarPedidoItem (req, res) {
        
        const pedido_item = "INSERT INTO pedido_item (cod_pedido, cod_produto, preco, desconto, quantidade, valor_total, valor_liquido, observacao) values ('"+req.body.cod_pedido+"', '"+req.body.cod_produto+"', '"+req.body.preco+"', '"+req.body.desconto+"', '"+req.body.quantidade+"', '"+req.body.valor_total+"', '"+req.body.valor_liquido+"', '"+req.body.observacao+"');"
        db.query(pedido_item);

        return res.json('Pedido criado com sucesso!');

    },
    /*
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

    }
    */

};
