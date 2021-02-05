const db = require("../config/databases");

exports.entidadeController = {
  
    async cadastroEntidade(req, res) {

        const ent = db.query("INSERT INTO entidade(nome, contato, email, senha, situacao, tipo) values ('"+req.body.nome+"', '"+req.body.contato+"', '"+req.body.email+"', '"+req.body.senha+"', '"+req.body.situacao+"', '"+req.body.tipo+"');");
        return res.json('Entidade cadastrada com sucesso!');

    },
    async editarEntidade(req, res) {

        const ent = db.query("UPDATE entidade SET nome ='"+req.body.nome+"', SET contato ='"+req.body.contato+"', SET email = '"+req.body.email+"', SET senha = '"+req.body.senha+"', SET situacao = '"+req.body.situacao+"', SET tipo='"+req.body.tipo+"' WHERE cod_entidade = "+req.params.cod+");");
        return res.json('Dados alterados com sucesso!');

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
