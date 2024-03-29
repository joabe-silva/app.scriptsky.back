const db = require('../config/databases');

exports.Grupo = {
    //Cadastra Produto Grupo
    async cadastroProdutoGrupo(req, res) {

        const prod = db.query(`INSERT INTO produto_grupo (sequencia, imagem, titulo, descricao, situacao) values ('${ req.body.sequencia }','${ req.body.imagem }','${ req.body.titulo }','${ req.body.descricao }','${ req.body.situacao }')`);
        return res.json('Grupo de produto cadastrado com sucesso!');

    },
    //Edita Produto Grupo
    async editarProdutoGrupo(req, res) {
        
        //Criando validação de campos que foram alterados na view e que devem ser alterados na base de dados
        var ret = await db.query(`SELECT cod_produto_grupo, sequencia, TRIM(imagem) AS imagem, TRIM(titulo) AS titulo, TRIM(descricao) AS descricao FROM produto_grupo WHERE cod_produto_grupo=${ req.params.cod }`);
    
        //Imagem
        if(ret.rows[0].imagem.trim() !== req.body.imagem.trim()) {
            db.query(`UPDATE produto_grupo SET imagem='${ req.body.imagem.trim() }' WHERE cod_produto_grupo=${ req.params.cod }`);
        }
        //Titulo
        if(ret.rows[0].titulo.trim() !== req.body.titulo.trim()) {
            db.query(`UPDATE produto_grupo SET titulo='${ req.body.titulo.trim() }' WHERE cod_produto_grupo=${ req.params.cod }`);
        }
        //Descricao
        if(ret.rows[0].descricao.trim() !== req.body.descricao.trim()) {
            db.query(`UPDATE produto_grupo SET descricao='${ req.body.descricao.trim() }' WHERE cod_produto_grupo=${ req.params.cod }`);
        }
        //Sequencia
        if(ret.rows[0].sequencia !== req.body.sequencia) {
            db.query(`UPDATE produto_grupo SET sequencia='${ req.body.sequencia }' WHERE cod_produto_grupo=${ req.params.cod }`);
        }
        //Situacao
        if(ret.rows[0].situacao !== req.body.situacao) {
            db.query(`UPDATE produto_grupo SET situacao='${ req.body.situacao }' WHERE cod_produto_grupo=${ req.params.cod }`);
        }
        
        return res.json('Dados do grupo de produto atualizados com sucesso!');
        
    },
    //Deleta um Grupo Especifico
    async deletaGrupo(req, res) {

        const prod = await db.query(`DELETE FROM produto_grupo WHERE cod_produto_grupo=${ req.params.cod }`);
        return res.json('Produto deletado com sucesso!');

    },
    //Retorna um Grupo Especifico
    async grupo(req, res) {

        const grupo = await db.query(`SELECT cod_produto_grupo, sequencia, TRIM(imagem) AS imagem, TRIM(titulo) AS titulo, TRIM(descricao) AS descricao, situacao FROM produto_grupo WHERE cod_produto_grupo=${ req.params.cod }`);
        return res.json(grupo.rows);

    },
    //Retorna Todos os Grupos
    async grupos(req, res) {

        const grupos = await db.query(`SELECT cod_produto_grupo, sequencia, TRIM(imagem) AS imagem, TRIM(titulo) AS titulo, TRIM(descricao) AS descricao FROM produto_grupo WHERE situacao = 0 ORDER BY sequencia ASC`);
        return res.json(grupos);

    },
    //Retorna Todos os Grupos Que Tenha os Caracteres do Titulo Parecidos Com os Caracteres Enviados na Request
    async GrupoPesquisaPorTitulo(req, res) {

        if(req.params.titulo !== 'Todos') {
            const grupos = await db.query(`SELECT cod_produto_grupo, sequencia, TRIM(imagem) AS imagem, TRIM(titulo) AS titulo, TRIM(descricao) AS descricao, CASE WHEN situacao = 0 THEN 'Ativo' ELSE 'Inativo' END AS situacao FROM produto_grupo WHERE titulo LIKE '%${ req.params.titulo }%' ORDER BY sequencia ASC`);
            return res.json(grupos);
        } else {
            const grupos = await db.query(`SELECT cod_produto_grupo, sequencia, TRIM(imagem) AS imagem, TRIM(titulo) AS titulo, TRIM(descricao) AS descricao, CASE WHEN situacao = 0 THEN 'Ativo' ELSE 'Inativo' END AS situacao FROM produto_grupo ORDER BY sequencia ASC`);
            return res.json(grupos);
        }
        
    },
  
};
