const db = require('../config/databases');

exports.Produto = {
    //Cadastra produto
    async cadastroProduto(req, res) {   
        const prod = db.query(`INSERT INTO produto (cod_produto_grupo, imagem, titulo, descricao, preco, desconto, situacao) values ('${ req.body.cod_produto_grupo }', '${ req.body.imagem.trim() }', '${ req.body.titulo.trim() }', '${ req.body.descricao.trim() }', '${ req.body.preco }', '${ req.body.desconto }', '${ req.body.situacao }')`);
        return res.json('Produto cadastrado com sucesso!');
    },
    //Edita produto
    async editarProduto(req, res) {
        
        //Criando validação de campos que foram alterados na view e que devem ser alterados na base de dados
        var ret = await db.query(`SELECT * FROM produto WHERE cod_produto=${ req.params.cod }`);
        
        //Grupo
        if(ret.rows[0].cod_produto_grupo !== req.body.cod_produto_grupo) {
            db.query(`UPDATE produto SET cod_produto_grupo ='${ req.body.cod_produto_grupo }' WHERE cod_produto =${ req.params.cod }`);
        }
        //Imagem
        if(ret.rows[0].imagem.trim() !== req.body.imagem.trim()) {
            db.query(`UPDATE produto SET imagem ='${ req.body.imagem.trim() }' WHERE cod_produto =${ req.params.cod }`);
        }
        //Titulo
        if(ret.rows[0].titulo.trim() !== req.body.titulo.trim()) {
            db.query(`UPDATE produto SET titulo ='${ req.body.titulo.trim() }' WHERE cod_produto =${ req.params.cod }`);
        }
        //Descricao
        if(ret.rows[0].descricao.trim() !== req.body.descricao.trim()) {
            db.query(`UPDATE produto SET descricao ='${ req.body.descricao.trim() }' WHERE cod_produto =${ req.params.cod }`);
        }
        //Preco
        if(ret.rows[0].preco !== req.body.preco) {
            db.query(`UPDATE produto SET preco ='${ req.body.preco }' WHERE cod_produto =${ req.params.cod }`);
        }
        //Desconto
        if(ret.rows[0].desconto !== req.body.desconto) {
            db.query(`UPDATE produto SET desconto ='${ req.body.desconto }' WHERE cod_produto =${ req.params.cod }`);
        }
        //Situacao
        if(ret.rows[0].situacao !== req.body.situacao) {
            db.query(`UPDATE produto SET situacao ='${ req.body.situacao }' WHERE cod_produto =${ req.params.cod }`);
        }
        return res.json('Dados do produto atualizados com sucesso!');
        
    },
    //Deleta um Produto Especifico
    async deletaProduto(req, res) {

        const prod = await db.query(`DELETE FROM produto WHERE cod_produto=${ req.params.cod }`);
        return res.json('Produto deletado com sucesso!');

    },
    //Retorna um Produto Especifico
    async produto(req, res) {

        const prod = await db.query(`SELECT cod_produto, cod_produto_grupo, TRIM(imagem) AS imagem, TRIM(titulo) AS titulo, descricao, preco, CASE WHEN situacao = 0 THEN 'Ativo' ELSE 'Inativo' END AS situacao FROM produto WHERE cod_produto='${ req.params.cod }' ORDER BY titulo ASC`);
        return res.json(prod.rows);

    },
    //Retorna Todos os Produtos
    async produtos(req, res) {

        const prod = await db.query("SELECT cod_produto, cod_produto_grupo, TRIM(imagem) AS imagem, TRIM(titulo) AS titulo, descricao, preco, CASE WHEN situacao = 0 THEN 'Ativo' ELSE 'Inativo' END AS situacao FROM produto WHERE situacao = 0 ORDER BY titulo ASC");
        return res.json(prod);

    },
    //Retorna Todos os Produtos de Um Certo Grupo de Produtos
    async produtosGrupo(req, res) {

        if(req.query.situacao === 2) {
            const prod = await db.query(`SELECT cod_produto, cod_produto_grupo, TRIM(imagem) AS imagem, TRIM(titulo) AS titulo, descricao, preco, CASE WHEN situacao = 0 THEN 'Ativo' ELSE 'Inativo' END AS situacao FROM produto WHERE cod_produto_grupo ='${ req.params.cod_produto_grupo }' ORDER BY titulo ASC`);
            return res.json(prod);
        } else {
            const prod = await db.query(`SELECT cod_produto, cod_produto_grupo, TRIM(imagem) AS imagem, TRIM(titulo) AS titulo, descricao, preco, CASE WHEN situacao = 0 THEN 'Ativo' ELSE 'Inativo' END AS situacao FROM produto WHERE cod_produto_grupo ='${ req.params.cod_produto_grupo }' AND situacao ='${ req.query.situacao }' ORDER BY titulo ASC`);
            return res.json(prod);
        }  

    },
    //Retorna Todos os Produtos Que Tenha os Caracteres do Titulo Parecidos Com os Caracteres Enviados na Request
    async produtoPesquisaPorTitulo(req, res) {

        if(req.params.titulo !== '') {
            const prod = await db.query(`SELECT cod_produto, cod_produto_grupo, TRIM(imagem) AS imagem, TRIM(titulo) AS titulo, descricao, preco, CASE WHEN situacao = 0 THEN 'Ativo' ELSE 'Inativo' END AS situacao FROM produto WHERE titulo LIKE '%${ req.params.titulo }%' ORDER BY titulo ASC`);
            return res.json(prod);
        } else {
            return res.json('Informe o titulo do produto que procura.');
        }
        
    },
  
};
