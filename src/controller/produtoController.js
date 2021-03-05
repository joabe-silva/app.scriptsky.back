const db = require("../config/databases");

exports.Produto = {
    //Cadastra produto
    async cadastroProduto(req, res) {

        const prod = db.query("INSERT INTO produto (cod_produto_grupo, imagem, titulo, descricao, preco, desconto, situacao) values ('"+req.body.cod_produto_grupo+"', '"+req.body.imagem+"', '"+req.body.titulo+"', '"+req.body.descricao+"', '"+req.body.preco+"', '"+req.body.desconto+"', '"+req.body.situacao+"');");
        return res.json('Produto cadastrado com sucesso!');

    },
    //Edita produto
    async editarProduto(req, res) {
        
        //Criando validação de campos que foram alterados na view e que devem ser alterados na base de dados
        var ret = await db.query("SELECT * FROM produto WHERE cod_produto="+req.params.cod+";");
        
        //Grupo
        if(ret.rows[0].cod_produto_grupo !== req.body.cod_produto_grupo) {
            db.query("UPDATE produto SET cod_produto_grupo = '"+req.body.cod_produto_grupo+"' WHERE cod_produto = "+req.params.cod+";");
        }
        //Imagem
        if(ret.rows[0].imagem.trim() !== req.body.imagem.trim()) {
            db.query("UPDATE produto SET imagem = '"+req.body.imagem.trim()+"' WHERE cod_produto = "+req.params.cod+";");
        }
        //Titulo
        if(ret.rows[0].titulo.trim() !== req.body.titulo.trim()) {
            db.query("UPDATE produto SET titulo = '"+req.body.titulo.trim()+"' WHERE cod_produto = "+req.params.cod+";");
        }
        //Descricao
        if(ret.rows[0].descricao.trim() !== req.body.descricao.trim()) {
            db.query("UPDATE produto SET descricao = '"+req.body.descricao.trim()+"' WHERE cod_produto = "+req.params.cod+";");
        }
        //Preco
        if(ret.rows[0].preco !== req.body.preco) {
            db.query("UPDATE produto SET preco = '"+req.body.preco+"' WHERE cod_produto = "+req.params.cod+";");
        }
        //Desconto
        if(ret.rows[0].desconto !== req.body.desconto) {
            db.query("UPDATE produto SET desconto = '"+req.body.desconto+"' WHERE cod_produto = "+req.params.cod+";");
        }
        //Situacao
        if(ret.rows[0].situacao !== req.body.situacao) {
            db.query("UPDATE produto SET situacao = '"+req.body.situacao+"' WHERE cod_produto = "+req.params.cod+";");
        }
        return res.json('Dados do produto atualizados com sucesso!');
        
    },
    //Retorna um Produto Especifico
    async produto(req, res) {

        const prod = await db.query("SELECT * FROM produto WHERE cod_produto="+req.params.cod+";");
        return res.json(prod.rows);

    },
    //Retorna Todos os Pedidos
    async produtos(req, res) {

        const prod = await db.query("SELECT * FROM produto ORDER BY titulo ASC");
        return res.json(prod.rows);

    }
  
};
