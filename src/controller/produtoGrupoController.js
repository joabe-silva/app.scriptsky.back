const db = require("../config/databases");

exports.Grupo = {
    //Cadastra Produto Grupo
    async cadastroProdutoGrupo(req, res) {

        const prod = db.query("INSERT INTO produto_grupo (descricao) values ('"+req.body.descricao+"');");
        return res.json('Grupo de produto cadastrado com sucesso!');

    },
    //Edita Produto Grupo
    async editarProdutoGrupo(req, res) {
        
        //Criando validação de campos que foram alterados na view e que devem ser alterados na base de dados
        var ret = await db.query("SELECT * FROM produto_grupo WHERE cod_produto_grupo="+req.params.cod+";");
        
        //Descricao
        if(ret.rows[0].descricao.trim() !== req.body.descricao.trim()) {
            db.query("UPDATE produto_grupo SET descricao = '"+req.body.descricao.trim()+"' WHERE cod_produto_grupo = "+req.params.cod+";");
        }
        
        return res.json('Dados do grupo de produto atualizados com sucesso!');
        
    },
    //Retorna um Produto Especifico
    async grupo(req, res) {

        const grupo = await db.query("SELECT * FROM produto_grupo WHERE cod_produto_grupo="+req.params.cod+";");
        return res.json(grupo.rows);

    },
    //Retorna Todos os Grupos
    async grupos(req, res) {

        const grupos = await db.query("SELECT * FROM produto_grupo ORDER BY descricao ASC");
        return res.json(grupos.rows);

    }
  
};
