const db = require('../config/databases');

exports.PedidoItem = {
    
    //Cria Pedido Item
    async criarPedidoItem (req, res) {
        
        const pedido_item = "INSERT INTO pedido_item (cod_pedido, cod_produto, preco, desconto, quantidade, valor_total, valor_liquido, observacao) values ('"+req.body.cod_pedido+"', '"+req.body.cod_produto+"', '"+req.body.preco+"', '"+req.body.desconto+"', '"+req.body.quantidade+"', '"+req.body.valor_total+"', '"+req.body.valor_liquido+"', '"+req.body.observacao+"');"
        db.query(pedido_item);

        return res.json('Item inserido com sucesso!');

    },
    //Retorna todos os Itens do Pedido
    async pedidoItens(req, res) {

        const pedido_item = "SELECT prod.cod_produto, prod.imagem, prod.titulo, prod.cod_produto_grupo, pedi.preco, pedi.quantidade, pedi.valor_total, pedi.observacao FROM pedido_item pedi INNER JOIN produto prod ON prod.cod_produto = pedi.cod_produto WHERE cod_pedido="+req.params.cod+" ORDER BY prod.titulo;"
        const ped = await db.query(pedido_item);

        return res.json(ped);

    }

};
