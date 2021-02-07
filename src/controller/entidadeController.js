const db = require("../config/databases");

exports.entidadeController = {
  
    async cadastroEntidade(req, res) {

        const ent = db.query("INSERT INTO entidade(nome, contato, email, senha, situacao, tipo) values ('"+req.body.nome+"', '"+req.body.contato+"', '"+req.body.email+"', '"+req.body.senha+"', '"+req.body.situacao+"', '"+req.body.tipo+"');");
        return res.json('Entidade cadastrada com sucesso!');

    },
    async editarEntidade(req, res) {
        
        //Criando validação de campos que foram alterados na view e que devem ser alterados na base de dados
        //const ret = await db.query("SELECT * FROM entidade WHERE cod_entidade="+req.params.cod+";");
        //const nome = ret.rows[{ nome }]
        
        db.query("UPDATE entidade SET nome = '"+req.body.nome+"' WHERE cod_entidade = "+req.params.cod+";");
        db.query("UPDATE entidade SET contato = '"+req.body.contato+"' WHERE cod_entidade = "+req.params.cod+";");
        db.query("UPDATE entidade SET email = '"+req.body.email+"' WHERE cod_entidade = "+req.params.cod+";");
        db.query("UPDATE entidade SET senha = '"+req.body.senha+"' WHERE cod_entidade = "+req.params.cod+";");
        db.query("UPDATE entidade SET situacao = '"+req.body.situacao+"' WHERE cod_entidade = "+req.params.cod+";");
        db.query("UPDATE entidade SET tipo = '"+req.body.tipo+"' WHERE cod_entidade = "+req.params.cod+";");

        //Retorna dados atualizados da entidade
        var ret = await db.query("SELECT * FROM entidade WHERE cod_entidade="+req.params.cod+";");
        return res.json(ret);

    },
    async entidade(req, res) {

        const ent = await db.query("SELECT * FROM entidade WHERE cod_entidade="+req.params.cod+";");
        return res.json(ent);

    },
    async entidades(req, res) {

        const ent = await db.query("SELECT * FROM entidade");
        return res.json(ent);

    }
  
};
